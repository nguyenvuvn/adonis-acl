'use strict'

/**
 * adonis-acl
 * Copyright(c) 2017 Evgeny Razumov
 * MIT Licensed
 */

const { ServiceProvider } = require('@adonisjs/fold')

class AclProvider extends ServiceProvider {
  register () {
    this.app.bind('Adonis/Acl/Role', () => {
      const Role = require('../src/Models/Role')
      Role._bootIfNotBooted()
      return Role
    })
    this.app.bind('Adonis/Acl/Permission', () => {
      const Permission = require('../src/Models/Permission')
      Permission._bootIfNotBooted()
      return Permission
    })
    this.app.bind('Adonis/Acl/HasRole', () => {
      const HasRole = require('../src/Traits/HasRole')
      return new HasRole()
    })
    this.app.bind('Adonis/Acl/HasPermission', () => {
      const HasPermission = require('../src/Traits/HasPermission')
      return new HasPermission()
    })
    this.app.bind('Adonis/Acl/Is', () => {
      const Is = require('../src/Middlewares/Is')
      return new Is()
    })
    this.app.bind('Adonis/Acl/Can', () => {
      const Can = require('../src/Middlewares/Can')
      return new Can()
    })
    this.app.bind('Adonis/Acl/Scope', () => {
      const Scope = require('../src/Middlewares/Scope')
      return new Scope()
    })
  }
}

module.exports = AclProvider
