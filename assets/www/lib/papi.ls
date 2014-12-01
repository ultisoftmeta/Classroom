
class PAPI
	(args) -> 
		@ <<< { host:'http://api.proteus.io/', sync:[], user:{}, mock:true, debug:{all:true}, cache:true, ajaxType:'jsonp' } <<< args
		@wrap ?= @log
		Array.prototype.isArray = true;
		if @mock then @hybrid = CorMock else if cordova?  then @hybrid = cordova
		if @user.name then @auth @user else @access = @getAccess()
		if @hybrid then @sync = @getSync()

	wrap: (res) -> res

	signout: -> @cordex 'setAuth', [ name:@user.name, app:@user.app, id:null,access:null]; @access = @user = null

	getAccess : ->
		if @access?.length then return @access
		if @hybrid then return @cordex("getAuth").fail( -> null).then (res) ~> @access = res.access

	ajax  	: (path, args={}, call) -> $.when @access .then (@access) ~> 
		@log @access, 'AJAX ACCESS'; @log path, 'AJAX'
		if @access?.length then path += "?access="+@access
		$.ajax {url:@host+path, dataType:@ajaxType, success:call} <<< args
		
	post 		: (path, body, call) -> @ajax	 'post/'+path, data:{body:JSON.stringify(body)}, call

	patch 	: (path, body, call) -> @ajax 'patch/'+path, data:{body:JSON.stringify(body)}, call

#	auth 		: (@user={}, call) -> @access = $.ajax(url:@host+'auth', data:user, dataType:@ajaxType).then (res) ~> 
	auth 		: (@user={}, call) -> 
		if (!@user.name && !@user.pass) then @access = null; @log 'UNAUTHED'; return $.Deferred().resolve()
		url = @host+'auth?name='+@user.name+'&pass='+@user.pass
		if @user.app then url += '&app='+@user.app
		@access = $.ajax(url:url, dataType:@ajaxType).then (res) ~> 
			@user.id = @idOf res.result[0]; @access = @user.access = res.result[0].access
			@cordex 'setAuth', [name:@user.name,pass:@user.pass,app:@user.app,id:@user.id,access:@user.access]
			call? res; @user.access
			
	register : (user={}, call) -> @post '!register', [user], call .then (res) ~> @log res, 'REG'; res.result[0].value[0] 

	rpc 		: (name, args=[], body={}, call) -> 
		path = '!'+name+'/'+args.join('/')
		if (body) then @post path, data:body, call else @ajax path, {}, call .then (res) -> res.result

	schema 	: (kind='', call) -> @ajax 'v1/@'+kind, , call

	#ar2Ob		: (ar, key, ob={}) -> for el in ar then ob[key] = if !ob[key] then el else if ob[ar].isArray() = ob[a].append el else [ob[key], el]

	create 	: (kind='', rec, call) -> @post kind, rec <<< '@class':kind, call
	
	idOf		: (rec='') -> rec = rec.\@rid ? rec.rid ? rec.id ? rec; rec.replace('#', '')
	
	get 		: (rec='', call) -> @ajax('v1/$'+ @idOf(rec), {}, call).then @wrap

	query  	: (kind='', opts={}, call) -> user = opts?.where?.user; $.when(@sync, @access).then (@sync) ~> 
#		if typeof opts.where === 'object' then opts.where = [ key+'='+JSON.stringify(val).replace('#', '%23') for key, val of opts.where when val].join(' and ')
		if typeof opts.where == 'object' then opts.where = [ key+'='+val.toString().replace('#', '%23').replace(/^(\w+.*)$/,"'$1'") for key, val of opts.where when val].join(' and ')
		@log @access, 'QUERY ACCESS'
		@log @sync, 'QUERY SYNC'
		if !opts.nolo && (!@access?.length || (user?.name == @user.name && @hybrid && @inSync(kind))) then return @cordex(kind, [opts], call) 
		if opts.fields?.join then opts.fields = opts.fields.join()
		if kind.indexOf(':') > -1 
			kind += if opts.fields then ','+opts.fields else ''
		else kind += if opts.fields then ':'+opts.fields else ':*'
		opts.where ?= 'true'
		if opts.skip then opts.where += ' skip '+opts.skip
		if opts.limit then opts.where += ' limit '+opts.limit 
		@ajax('v1/'+kind+',@rid+as+id/'+opts.where, {}, call).then (res, r1, r2) ~> @log [res, r1, r2], 'QUERY'; @wrap res.result
		
	delete 	: (rec, call) -> @ajax 'delete/'+@idOf(rec), {}, call

	update 	: (rec, fields, call) ->  
		fields = [key+'='+JSON.stringify(val) for key, val of fields].join()
		@ajax 'patch/'+@idOf(rec), data:body:fields, call .then (res) -> res.result[0]
	
	inSync 	: (kind='') -> [return true if ..== kind for @sync when @sync]

	getSync 	: -> @cordex 'getSync', [], (res) ~> @sync = res

	setSync 	: (sync=[]) -> @sync = sync; @cordex 'setSync', sync

	log 		: (msg, tag='INFO') -> if (@debug[tag] || @debug.all) then console.log '['+tag+'] :'+ JSON.stringify msg

	pairPatch: (call) -> @cordex "pairPatch", [], call

	module 	: (call, app) -> if(@access) then @ajax 'v1/module', {}, call else @CorMock.('module')

	profile  : (opts={}, call) -> @digest opts, call

	detail  : (prof, opts={}, call) -> @rpc 'profileDetail', [@idOf(prof),opts.from ? '',opts.to ? ''], call

	digest  : (opts={}, call, dig={}) -> $.when @access .then (@access) ~>
		if !@access?.length || (@hybrid && (opts.user == @user.name || opts.user == @user.id) and opts.view == 'cmd') then  return @cordex 'profile', [], call 
		if !@hybrid then return @ajax('v1/!profileDigest/'+@idOf(opts.user)+'/'+ (opts.profId ? ''))
		$.when(@ajax('v1/!profileDigest/'+@idOf(opts.user)+'/'+ (opts.profId ? '')), @cordex('profile')).then (res=[], loc=[]) ~> 
			rem = res[0].result; @log rem.length,'REM LEM'; @log loc.length, 'LOC LEN'; res=[]
			for rec in loc then dig[rec.module.name] = rec.digest
			for rec in rem then if dig[rec.module.name] then rec.digest = dig[rec.module.name]
			@log rem, 'DIGEST'; rem

	cordex  	: (name, args=[], onOk, onEr) ->
		@log name, 'CORDEX'
		args = if !args.isArray then [args] else args
		defer = $.Deferred().always(@wrap).fail(onEr).done(onOk)
		if !@hybrid then defer.reject()
		else if @hybrid.exec then @hybrid.exec defer.resolve, defer.reject, "PatchDataForAlternateDisplay", name, args
		else document.addEventListener "deviceReady", ~> @hybrid.exec defer.resolve, defer.reject, "PatchDataForAlternateDisplay", name, args
		defer.fail (res) ~> @log res, 'CORFAIL'
		defer.done (res) ~> @log res, 'CORDONE'
		defer.promise()

CorMock =
	exec 		: (onOk, onEr, bridge, fun, args) -> if (@[fun]) then @[fun] onOk else onEr(msg:fun+' mock not defined',{})
	getSync	: (call) -> call ['stepCount', 'patchStatus', 'heartRate', 'ingestion', 'skinTemp', 'posture']
	stepCount: (call) -> call [{'perMin':30, time:Date()}, {'perMin':50}]
	heartRate: (call) -> call [{'bpm':100, time:Date()}, {'bpm':150}]
	ingestion: (call) -> call [{'code':'12345', time:Date()}]
	setAuth  : (call) -> call()
	getAuth  : (call) -> call {}
	module	: (call) -> call [
		* id:'cmd:mod1', title:'CMD HeartRate', unit:'bpm',	view:'cmd'
		* id:'cmd:mod2', title:'StepCount', unit:'steps', view:'cmd'
		* id:'cmd:mod3', title:'CMD Ingestion', unit:'dose',  view:'cmd'
	]

	profile :  (call) -> call [
		* id: 'cmd:pro1', module:{view:'cmd', name:'cmdHeartRate'}, digest:{value:'34', unit:'bpm', 	time:Date()}, 	params:null, status:'enabled'
		* id: 'cmd:pro2', module:{view:'cmd', name:'cmdStepCount'}, digest:{value:'450',unit:'perMin', time:Date()}, 	params:null, status:'enabled'
		* id: 'cmd:pro3', module:{view:'cmd', name:'cmdIngestions'}, digest:{value:'1',  unit:'meds', 	time:Date()}, 	params:null, status:'enabled'
	]

(exports ? this).PAPI = PAPI





