const User = require('./user')
const Teacher = require('./teachers')
const Student = require('./students')
const Class = require('./classes')
const Session = require('./sessions')
const StudentClass = require('./student-class')
const StudentSession = require('./student-session')


/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Teacher.hasMany(Class)
Class.belongsTo(Teacher)

Student.belongsToMany(Class, { through: StudentClass })
Class.belongsToMany(Student, { through: StudentClass })

Student.belongsToMany(Session, { through: StudentSession })
Session.belongsToMany(Student, { through: StudentSession })

Class.hasMany(Session)
Session.belongsTo(Class)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Teacher,
  Student,
  Class,
  Session,
  StudentClass,
  StudentSession
}
