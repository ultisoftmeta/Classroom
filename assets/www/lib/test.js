(function(){
  var u1, u2, r1, g1, admin, should, p;
  u1 = {
    name: 'ctest2',
    pass: 'ctest2',
    app: 'carry1',
    id: '11:8'
  };
  u2 = {
    name: 'pat3',
    pass: 'pat3'
  };
  r1 = {
    username: 'test1',
    password: 'test1',
    firstname: 'test1',
    lastname: 'test1',
    appkey: 'triton',
    email: 'test1@test.com'
  };
  g1 = {
    name: 'testG1'
  };
  admin = {
    name: 'admin',
    pass: 'admin'
  };
  should = it;
  p = new PAPI({
    mock: true,
    user: u1
  });
  describe('dummy', function(){
    before(function(){
      return console.log('starting dummy');
    });
    should('work', function(){
      return expect(true);
    });
    return should('async', function(done){
      expect(true);
      return done();
    });
  });
  describe('authentication', function(){
    this.timeout(4000);
    should('authorise on creation', function(done){
      return p.query('contact').then(function(res){
        expect(res.length).to.be.above(0);
        return done();
      });
    });
    should('set an access token', function(done){
      return p.auth(u1).then(function(res){
        expect(p.user.access).to.be.a('string');
        return done();
      });
    });
    return should('not be able to get crap', function(done){
      return p.get('asdfasdf').always(function(res){
        p.log(res, 'CRAP');
        expect(res.length).to.be(void 8);
        return done();
      });
    });
  });
  describe('get User', function(){
    return should('return an object', function(done){
      return p.get(u1.id).then(function(res){
        expect(res.name).to.be.a('string');
        return done();
      });
    });
  });
  describe('query', function(){
    this.timeout(4000);
    should('get event', function(done){
      return p.query('ingestion').then(function(res){
        p.log(res, 'INGESTION');
        expect(res).to.not.be.empty();
        return done();
      });
    });
    should('get contact', function(done){
      return p.query('contact').then(function(res){
        expect(res).to.not.be.empty();
        return done();
      });
    });
    should('project fields', function(done){
      return p.query('ingestion:user.name').then(function(res){
        expect(res[0].user).to.contain(u1.name);
        return done();
      });
    });
    should('filter results', function(done){
      return p.query('ingestion', {
        where: {
          user: '%23' + u1.id
        }
      }).then(function(res){
        expect(res[0]['@class']).to.be.eql('ingestion');
        return done();
      });
    });
    should('limit results', function(done){
      return p.query('stepCount', {
        nolo: true,
        limit: 5
      }).then(function(res){
        expect(res.length).to.be.eql(5);
        return done();
      });
    });
    should('skip results', function(done){
      return p.query('stepCount', {
        nolo: true,
        limit: 5,
        skip: 5
      }).then(function(res){
        expect(res.length).to.be.eql(5);
        return done();
      });
    });
    return should('get weight', function(done){
      return p.query('weight', {
        limit: 100
      }).then(function(res){
        expect(res.length).to.be.above(0);
        return done();
      });
    });
  });
  describe('hybrid', function(){
    should('return sync queries from local', function(done){
      return p.query('stepCount', {
        where: {
          user: u1
        }
      }).then(function(res){
        p.log(res, 'hybrid');
        expect(res[0].perMin).to.be(30);
        return done();
      });
    });
    return should('return non sync queries from cloud', function(done){
      return done();
    });
  });
  describe('create', function(){
    should('return an object id', function(done){
      return p.create('test', {
        key1: 'val1'
      }).then(function(res){
        u1.testId = res['@rid'];
        expect(res['@rid']).to.be.a('string');
        return done();
      });
    });
    should('be able to now get it', function(done){
      return p.get(u1.testId).then(function(res){
        expect(res.key1).to.be.eql('val1');
        return done();
      });
    });
    return should('be of the specfied class', function(done){
      return p.get(u1.testId).then(function(res){
        expect(res['@class']).to.be.eql('test');
        return done();
      });
    });
  });
  describe('update', function(){
    should('return an update count', function(done){
      return p.update(u1.testId, {
        key2: 'val2'
      }).then(function(res){
        p.log(res);
        expect(res.value).to.be.eql(1);
        return done();
      });
    });
    return should('have updated the object', function(done){
      return p.get(u1.testId).then(function(res){
        expect(res.key2).to.be.eql('val2');
        return done();
      });
    });
  });
  describe('delete', function(){
    return should('return null', function(done){
      return p['delete'](u1.testId).then(function(res){
        expect(res).to.not.be.ok();
        return done();
      });
    });
  });
  describe('registration', function(){
    this.timeout(4000);
    after(function(done){
      if (!r1['@rid']) {
        return done();
      } else {
        return p.auth(admin).then($.when(p['delete'](r1.group), p['delete'](r1.con), p['delete'](r1)).then(function(){
          return p.auth(u1).then(function(){
            return done();
          });
        }));
      }
    });
    should('create a user', function(done){
      return p.register(r1).then(function(res){
        delete res.password;
        import$(r1, res);
        p.log(res, 'REG');
        expect(res['@rid']).to.be.a('string');
        return done();
      });
    });
    should('be able to auth', function(done){
      return p.auth({
        name: r1.name,
        pass: r1.password + '/' + r1.appkey
      }).then(function(res){
        expect(p.user.access).to.be.a('string');
        return done();
      });
    });
    should('create a group', function(done){
      return p.query('group', {
        where: {
          owner: r1['@rid']
        }
      }).then(function(res){
        r1.group = res[0];
        expect(res.length).to.be(1);
        return done();
      });
    });
    return should('create a contact', function(done){
      return p.query('contact', {
        where: {
          user: r1['@rid']
        }
      }).then(function(res){
        r1.con = res[0];
        expect(res[0].email).to.be.eql(r1.email);
        return done();
      });
    });
  });
  describe('groups', function(){});
  describe('profiles', function(){
    this.timeout(9000);
    should('return a digest', function(done){
      return p.profile().then(function(res){
        expect(res[0].digest.time).to.be.a('string');
        return done();
      });
    });
    should('return a module', function(done){
      return p.profile().then(function(res){
        expect(res[0].module.name).to.be.a('string');
        return done();
      });
    });
    should('get CMD from mock only', function(done){
      return p.profile({
        user: u1.id,
        view: 'cmd'
      }).then(function(res){
        expect(res[0].id).to.contain('cmd');
        return done();
      });
    });
    should('get all from local and remote', function(done){
      return p.profile({
        user: u1.id
      }).then(function(res){
        p.log(res, 'PROF');
        expect(res[0].id).to.be.ok();
        return done();
      });
    });
    return should('get from mock when unauthed', function(done){
      var p;
      p = new PAPI();
      return p.profile().then(function(res){
        expect(res.length).to.be.above(2);
        return done();
      });
    });
  });
  describe('join', function(){
    should('fail if no access code', function(done){
      return p.join({
        name: g1.name
      }).then;
    });
    should('work if access code ok', function(done){
      return p.join(g1).then(function(res){
        return expect(res);
      });
    });
    should('add group to user.groups', function(done){
      return p.get(u1).then(function(res){
        expect(res.groups).to.contain[g[1].id];
        return done();
      });
    });
    return should('now share data with group', function(done){
      return p.auth(u1).then(function(res){
        return expect(res);
      });
    });
  });
  describe('leave', function(){});
  describe('grant', function(){});
  describe('revoke', function(){});
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
