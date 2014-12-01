#u1 = name:'test1/triton', pass:'test1/triton', id:'11:6'
#u1 = name:'pat1', pass:'pat1', id:'11:0'

u1 = name:'ctest2', pass:'ctest2', app:'carry1', id:'11:8'
u2 = name:'pat3', pass:'pat3'
r1 = username:'test1', password:'test1', firstname:'test1', lastname:'test1', appkey:'triton', email:'test1@test.com'
g1 = name:'testG1'
admin = name:'admin', pass:'admin'
should = it
p = new PAPI(mock:true, user:u1)


describe 'dummy', ->
	before -> console.log 'starting dummy'
	should 'work', -> expect(true)
	should 'async', (done) -> expect(true); done()

describe 'authentication',  ->
	@timeout 4000
	should 'authorise on creation', (done) -> p.query 'contact' .then (res) -> expect(res.length).to.be.above(0);done()
	should 'set an access token', (done)-> p.auth(u1).then (res) -> expect(p.user.access).to.be.a('string'); done()
	should 'not be able to get crap', (done) -> p.get('asdfasdf').always (res) -> p.log res, 'CRAP'; expect(res.length).to.be(undefined); done()
	
describe 'get User' ->
	should 'return an object', (done) -> p.get(u1.id).then (res) -> expect(res.name).to.be.a('string'); done()

describe 'query' ->
	@timeout 4000
	should 'get event', (done) -> p.query('ingestion').then (res) -> p.log(res, 'INGESTION'); expect(res).to.not.be.empty(); done()
	should 'get contact', (done) -> p.query('contact').then (res) -> expect(res).to.not.be.empty(); done()
	should 'project fields', (done) -> p.query('ingestion:user.name').then (res) -> expect(res[0].user).to.contain(u1.name);done()
	should 'filter results', (done) -> p.query('ingestion', where:user:'%23'+u1.id).then (res) -> expect(res[0].\@class).to.be.eql('ingestion');done()
	should 'limit results', (done) -> p.query('stepCount', nolo:true, limit:5).then (res) -> expect(res.length).to.be.eql(5);done()
	should 'skip results', (done) -> p.query('stepCount', nolo:true, limit:5, skip:5).then (res) -> expect(res.length).to.be.eql(5);done()
	should 'get weight', (done) -> p.query('weight', limit:100).then (res) -> expect(res.length).to.be.above(0);done()

describe 'hybrid' ->
	should 'return sync queries from local', (done) -> p.query('stepCount', where:user:u1).then (res) -> p.log(res, 'hybrid'); expect(res[0].perMin).to.be(30); done()
	should 'return non sync queries from cloud', (done) -> done();

describe 'create' ->
	should 'return an object id', (done) -> p.create('test', key1:'val1').then (res) -> u1.testId = res.\@rid; expect(res['@rid']).to.be.a('string');done()
	should 'be able to now get it', (done) -> p.get(u1.testId).then (res) -> expect(res.key1).to.be.eql('val1');done()
	should 'be of the specfied class', (done) -> p.get(u1.testId).then (res) -> expect(res['@class']).to.be.eql('test');done()


describe 'update' ->
	should 'return an update count', (done) -> p.update(u1.testId, key2:'val2').then (res) -> p.log res; expect(res.value).to.be.eql(1);done()
	should 'have updated the object', (done) -> p.get(u1.testId).then (res) -> expect(res.key2).to.be.eql('val2'); done()

describe 'delete' ->
	should 'return null', (done) -> p.delete(u1.testId).then (res) -> expect(res).to.not.be.ok() ; done()
	# should 'not be now able to get it', (done) -> p.get(u1.testId).then (res) -> p.log status, 'STATUS'; expect(res).to.be.not.ok(); done()

describe 'registration', ->
	@timeout 4000
	after  (done) -> if !r1.\@rid then done() else p.auth(admin).then $.when(p.delete(r1.group), p.delete(r1.con), p.delete(r1)).then -> p.auth u1 .then -> done() 
	should 'create a user', (done) -> p.register r1 .then (res) -> delete res.password; r1 <<< res; p.log res, 'REG'; expect(res.\@rid).to.be.a('string');done()
	should 'be able to auth', (done) -> p.auth(name:r1.name, pass:r1.password+'/'+r1.appkey) .then (res) -> expect(p.user.access).to.be.a('string'); done()
	should 'create a group', (done) -> p.query('group', where:owner:r1.\@rid).then (res) -> r1.group = res[0]; expect(res.length).to.be(1); done()
	should 'create a contact', (done) -> p.query('contact', where:user:r1.\@rid).then (res) -> r1.con = res[0]; expect(res[0].email).to.be.eql(r1.email); done() 
	
describe 'groups', ->
#	after (done) -> if !g[0].\@rid then done() else p.auth(admin).then (res) -> p.delete g[0].\@rid .then p.auth u[0] .then done
#	should 'create a group', (done) -> p.log(g[0], 'G0'); p.create 'group', g[0] .then (g[0]) -> expect(g[0].\@rid).to.be.a('string'); done()

describe 'profiles', ->
	@timeout 9000
	should 'return a digest', (done) -> p.profile().then (res) -> expect(res[0].digest.time).to.be.a('string'); done()
	should 'return a module', (done) -> p.profile().then (res) -> expect(res[0].module.name).to.be.a('string'); done()
	should 'get CMD from mock only', (done) -> p.profile(user:u1.id, view:'cmd').then (res) -> expect(res[0].id).to.contain('cmd'); done()
	should 'get all from local and remote', (done) -> p.profile(user:u1.id).then (res) -> p.log res, 'PROF'; expect(res[0].id).to.be.ok(); done()
	#should 'get from mock when unauthed', (done) -> p.auth(name:'b1', pass:'b1').then (res) -> p.profile().then (res) -> expect(res.length).to.be.above(2); done()
	should 'get from mock when unauthed', (done) -> p = new PAPI(); p.profile().then (res) -> expect(res.length).to.be.above(2); done()

describe 'join', ->
	should 'fail if no access code', (done) -> p.join name:g1.name .then  
	should 'work if access code ok', (done) -> p.join g1 .then (res) -> expect(res)
	should 'add group to user.groups', (done) -> p.get u1 .then (res) -> expect(res.groups).to.contain.(g[1].id); done()
	should 'now share data with group', (done) -> p.auth u1 .then (res) -> expect(res) 

describe 'leave', ->

describe 'grant', ->

describe 'revoke', ->
