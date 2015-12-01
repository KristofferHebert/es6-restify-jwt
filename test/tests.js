'use strict'
import request from 'supertest'
import LOCALS from '../server/config/locals'

console.log('http://localhost:' + LOCALS.port)
let server =  request('http://localhost:' + LOCALS.port)

describe('Testing Auth with API', function(){
	it('responds to unauthorized /api/v1/user request', function(done){
		server
			.get('/api/v1/users')
			.expect(403, done)
	})

	it('404 everything else', function(done){
		server
			.get('/foo/bar')
			.expect(404, done)
	})
})
