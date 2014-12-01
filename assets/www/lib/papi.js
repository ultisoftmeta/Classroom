(function(){
  var PAPI, CorMock;
  PAPI = (function(){
    PAPI.displayName = 'PAPI';
    var prototype = PAPI.prototype, constructor = PAPI;
    function PAPI(args){
      import$((this.host = 'http://api.proteus.io/', this.sync = [], this.user = {}, this.mock = true, this.debug = {
        all: true
      }, this.cache = true, this.ajaxType = 'jsonp', this), args);
      this.wrap == null && (this.wrap = this.log);
      Array.prototype.isArray = true;
      if (this.mock) {
        this.hybrid = CorMock;
      } else if (typeof cordova != 'undefined' && cordova !== null) {
        this.hybrid = cordova;
      }
      if (this.user.name) {
        this.auth(this.user);
      } else {
        this.access = this.getAccess();
      }
      if (this.hybrid) {
        this.sync = this.getSync();
      }
    }
    prototype.wrap = function(res){
      return res;
    };
    prototype.signout = function(){
      this.cordex('setAuth', [{
        name: this.user.name,
        app: this.user.app,
        id: null,
        access: null
      }]);
      return this.access = this.user = null;
    };
    prototype.getAccess = function(){
      var ref$, this$ = this;
      if ((ref$ = this.access) != null && ref$.length) {
        return this.access;
      }
      if (this.hybrid) {
        return this.cordex("getAuth").fail(function(){
          return null;
        }).then(function(res){
          return this$.access = res.access;
        });
      }
    };
    prototype.ajax = function(path, args, call){
      var this$ = this;
      args == null && (args = {});
      return $.when(this.access).then(function(access){
        var ref$;
        this$.access = access;
        this$.log(this$.access, 'AJAX ACCESS');
        this$.log(path, 'AJAX');
        if ((ref$ = this$.access) != null && ref$.length) {
          path += "?access=" + this$.access;
        }
        return $.ajax(import$({
          url: this$.host + path,
          dataType: this$.ajaxType,
          success: call
        }, args));
      });
    };
    prototype.post = function(path, body, call){
      return this.ajax('post/' + path, {
        data: {
          body: JSON.stringify(body)
        }
      }, call);
    };
    prototype.patch = function(path, body, call){
      return this.ajax('patch/' + path, {
        data: {
          body: JSON.stringify(body)
        }
      }, call);
    };
    prototype.auth = function(user, call){
      var url, this$ = this;
      this.user = user != null
        ? user
        : {};
      if (!this.user.name && !this.user.pass) {
        this.access = null;
        this.log('UNAUTHED');
        return $.Deferred().resolve();
      }
      url = this.host + 'auth?name=' + this.user.name + '&pass=' + this.user.pass;
      if (this.user.app) {
        url += '&app=' + this.user.app;
      }
      return this.access = $.ajax({
        url: url,
        dataType: this.ajaxType
      }).then(function(res){
        this$.user.id = this$.idOf(res.result[0]);
        this$.access = this$.user.access = res.result[0].access;
        this$.cordex('setAuth', [{
          name: this$.user.name,
          pass: this$.user.pass,
          app: this$.user.app,
          id: this$.user.id,
          access: this$.user.access
        }]);
        if (typeof call === 'function') {
          call(res);
        }
        return this$.user.access;
      });
    };
    prototype.register = function(user, call){
      var this$ = this;
      user == null && (user = {});
      return this.post('!register', [user], call).then(function(res){
        this$.log(res, 'REG');
        return res.result[0].value[0];
      });
    };
    prototype.rpc = function(name, args, body, call){
      var path, def;
      args == null && (args = []);
      body == null && (body = {});
      path = '!' + name + '/' + args.join('/');
      def = body
        ? this.post(path, {
          data: body
        }, call)
        : this.ajax(path, {}, call);
      return def.then(function(res){
        return res.result;
      });
    };
    prototype.schema = function(kind, call){
      kind == null && (kind = '');
      return this.ajax('v1/@' + kind, void 8, call);
    };
    prototype.create = function(kind, rec, call){
      kind == null && (kind = '');
      return this.post(kind, (rec['@class'] = kind, rec), call);
    };
    prototype.idOf = function(rec){
      var ref$;
      rec == null && (rec = '');
      rec = (ref$ = rec['@rid']) != null
        ? ref$
        : (ref$ = rec.rid) != null
          ? ref$
          : (ref$ = rec.id) != null ? ref$ : rec;
      return rec.replace('#', '');
    };
    prototype.get = function(rec, call){
      rec == null && (rec = '');
      return this.ajax('v1/$' + this.idOf(rec), {}, call).then(this.wrap);
    };
    prototype.query = function(kind, opts, call){
      var user, ref$, this$ = this;
      kind == null && (kind = '');
      opts == null && (opts = {});
      user = opts != null ? (ref$ = opts.where) != null ? ref$.user : void 8 : void 8;
      return $.when(this.sync, this.access).then(function(sync){
        var key, val, ref$;
        this$.sync = sync;
        if (typeof opts.where === 'object') {
          opts.where = (function(){
            var ref$, results$ = [];
            for (key in ref$ = opts.where) {
              val = ref$[key];
              if (val) {
                results$.push(key + '=' + val.toString().replace('#', '%23').replace(/^(\w+.*)$/, "'$1'"));
              }
            }
            return results$;
          }()).join(' and ');
        }
        this$.log(this$.access, 'QUERY ACCESS');
        this$.log(this$.sync, 'QUERY SYNC');
        if (!opts.nolo && (!((ref$ = this$.access) != null && ref$.length) || ((user != null ? user.name : void 8) === this$.user.name && this$.hybrid && this$.inSync(kind)))) {
          return this$.cordex(kind, [opts], call);
        }
        if ((ref$ = opts.fields) != null && ref$.join) {
          opts.fields = opts.fields.join();
        }
        if (kind.indexOf(':') > -1) {
          kind += opts.fields ? ',' + opts.fields : '';
        } else {
          kind += opts.fields ? ':' + opts.fields : ':*';
        }
        opts.where == null && (opts.where = 'true');
        if (opts.skip) {
          opts.where += ' skip ' + opts.skip;
        }
        if (opts.limit) {
          opts.where += ' limit ' + opts.limit;
        }
        return this$.ajax('v1/' + kind + ',@rid+as+id/' + opts.where, {}, call).then(function(res, r1, r2){
          this$.log([res, r1, r2], 'QUERY');
          return this$.wrap(res.result);
        });
      });
    };
    prototype['delete'] = function(rec, call){
      return this.ajax('delete/' + this.idOf(rec), {}, call);
    };
    prototype.update = function(rec, fields, call){
      var key, val;
      fields = (function(){
        var ref$, results$ = [];
        for (key in ref$ = fields) {
          val = ref$[key];
          results$.push(key + '=' + JSON.stringify(val));
        }
        return results$;
      }()).join();
      return this.ajax('patch/' + this.idOf(rec), {
        data: {
          body: fields
        }
      }, call).then(function(res){
        return res.result[0];
      });
    };
    prototype.inSync = function(kind){
      var i$, x$, ref$, len$;
      kind == null && (kind = '');
      for (i$ = 0, len$ = (ref$ = this.sync).length; i$ < len$; ++i$) {
        x$ = ref$[i$];
        if (this.sync) {
          if (x$ === kind) {
            return true;
          }
        }
      }
    };
    prototype.getSync = function(){
      var this$ = this;
      return this.cordex('getSync', [], function(res){
        return this$.sync = res;
      });
    };
    prototype.setSync = function(sync){
      sync == null && (sync = []);
      this.sync = sync;
      return this.cordex('setSync', sync);
    };
    prototype.log = function(msg, tag){
      tag == null && (tag = 'INFO');
      if (this.debug[tag] || this.debug.all) {
        return console.log('[' + tag + '] :' + JSON.stringify(msg));
      }
    };
    prototype.pairPatch = function(call){
      return this.cordex("pairPatch", [], call);
    };
    prototype.module = function(call, app){
      if (this.access) {
        return this.ajax('v1/module', {}, call);
      } else {
        return this.CorMock['module'];
      }
    };
    prototype.profile = function(opts, call){
      opts == null && (opts = {});
      return this.digest(opts, call);
    };
    prototype.detail = function(prof, opts, call){
      var ref$;
      opts == null && (opts = {});
      return this.rpc('profileDetail', [this.idOf(prof), (ref$ = opts.from) != null ? ref$ : '', (ref$ = opts.to) != null ? ref$ : ''], call);
    };
    prototype.digest = function(opts, call, dig){
      var this$ = this;
      opts == null && (opts = {});
      dig == null && (dig = {});
      return $.when(this.access).then(function(access){
        var ref$;
        this$.access = access;
        if (!((ref$ = this$.access) != null && ref$.length) || (this$.hybrid && (opts.user === this$.user.name || opts.user === this$.user.id) && opts.view === 'cmd')) {
          return this$.cordex('profile', [], call);
        }
        if (!this$.hybrid) {
          return this$.ajax('v1/!profileDigest/' + this$.idOf(opts.user) + '/' + ((ref$ = opts.profId) != null ? ref$ : '')).then(function(res){
            return res.result;
          });
        }
        return $.when(this$.ajax('v1/!profileDigest/' + this$.idOf(opts.user) + '/' + ((ref$ = opts.profId) != null ? ref$ : '')), this$.cordex('profile')).then(function(res, loc){
          var rem, i$, len$, rec;
          res == null && (res = []);
          loc == null && (loc = []);
          rem = res[0].result;
          this$.log(rem.length, 'REM LEM');
          this$.log(loc.length, 'LOC LEN');
          res = [];
          for (i$ = 0, len$ = loc.length; i$ < len$; ++i$) {
            rec = loc[i$];
            dig[rec.module.name] = rec.digest;
          }
          for (i$ = 0, len$ = rem.length; i$ < len$; ++i$) {
            rec = rem[i$];
            if (dig[rec.module.name]) {
              rec.digest = dig[rec.module.name];
            }
          }
          this$.log(rem, 'DIGEST');
          return rem;
        });
      });
    };
    prototype.cordex = function(name, args, onOk, onEr){
      var defer, this$ = this;
      args == null && (args = []);
      this.log(name, 'CORDEX');
      args = !args.isArray ? [args] : args;
      defer = $.Deferred().always(this.wrap).fail(onEr).done(onOk);
      if (!this.hybrid) {
        defer.reject();
      } else if (this.hybrid.exec) {
        this.hybrid.exec(defer.resolve, defer.reject, "PatchDataForAlternateDisplay", name, args);
      } else {
        document.addEventListener("deviceReady", function(){
          return this$.hybrid.exec(defer.resolve, defer.reject, "PatchDataForAlternateDisplay", name, args);
        });
      }
      defer.fail(function(res){
        return this$.log(res, 'CORFAIL');
      });
      defer.done(function(res){
        return this$.log(res, 'CORDONE');
      });
      return defer.promise();
    };
    return PAPI;
  }());
  CorMock = {
    exec: function(onOk, onEr, bridge, fun, args){
      if (this[fun]) {
        return this[fun](onOk);
      } else {
        return onEr({
          msg: fun + ' mock not defined'
        }, {});
      }
    },
    getSync: function(call){
      return call(['stepCount', 'patchStatus', 'heartRate', 'ingestion', 'skinTemp', 'posture']);
    },
    stepCount: function(call){
      return call([
        {
          'perMin': 30,
          time: Date()
        }, {
          'perMin': 50
        }
      ]);
    },
    heartRate: function(call){
      return call([
        {
          'bpm': 100,
          time: Date()
        }, {
          'bpm': 150
        }
      ]);
    },
    ingestion: function(call){
      return call([{
        'code': '12345',
        time: Date()
      }]);
    },
    setAuth: function(call){
      return call();
    },
    getAuth: function(call){
      return call({});
    },
    module: function(call){
      return call([
        {
          id: 'cmd:mod1',
          title: 'CMD HeartRate',
          unit: 'bpm',
          view: 'cmd'
        }, {
          id: 'cmd:mod2',
          title: 'StepCount',
          unit: 'steps',
          view: 'cmd'
        }, {
          id: 'cmd:mod3',
          title: 'CMD Ingestion',
          unit: 'dose',
          view: 'cmd'
        }
      ]);
    },
    profile: function(call){
      return call([
        {
          id: 'cmd:pro1',
          module: {
            view: 'cmd',
            name: 'cmdHeartRate'
          },
          digest: {
            value: '34',
            unit: 'bpm',
            time: Date()
          },
          params: null,
          status: 'enabled'
        }, {
          id: 'cmd:pro2',
          module: {
            view: 'cmd',
            name: 'cmdStepCount'
          },
          digest: {
            value: '450',
            unit: 'perMin',
            time: Date()
          },
          params: null,
          status: 'enabled'
        }, {
          id: 'cmd:pro3',
          module: {
            view: 'cmd',
            name: 'cmdIngestions'
          },
          digest: {
            value: '1',
            unit: 'meds',
            time: Date()
          },
          params: null,
          status: 'enabled'
        }
      ]);
    }
  };
  (typeof exports != 'undefined' && exports !== null ? exports : this).PAPI = PAPI;
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
