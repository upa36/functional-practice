const { expect } = require('chai')
const {
  assignTasks, calculateTimeSpent, filterByName, filterForQA,
} = require('./index')

describe('Practice Problems', () => {
  describe('assignTasks', () => {
    it('updates the assignee of tasks to be someone else', () => {
      const tasks = [
        { name: 'Grade module 3 homework', assignee: 'John', dueDate: '2019-09-30' },
        { name: 'Fill out student evaluations', assignee: 'John', dueDate: '2019-10-02' },
        { name: 'Meet with prospective school', assignee: 'Peggy', dueDate: '2019-10-10' },
        { name: 'Create email campaign for new program offering', assignee: 'Dave', dueDate: '2019-10-03' },
        { name: 'Clean up classroom', assignee: 'Rich', dueDate: '2019-09-29' },
      ]

      const expectedOutput = [
        { name: 'Grade module 3 homework', assignee: 'Rich', dueDate: '2019-09-30' },
        { name: 'Fill out student evaluations', assignee: 'Rich', dueDate: '2019-10-02' },
        { name: 'Meet with prospective school', assignee: 'Peggy', dueDate: '2019-10-10' },
        { name: 'Create email campaign for new program offering', assignee: 'Dave', dueDate: '2019-10-03' },
        { name: 'Clean up classroom', assignee: 'Rich', dueDate: '2019-09-29' },
      ]

      expect(assignTasks(tasks, 'John', 'Rich')).to.deep.equal(expectedOutput)
    })
  })

  describe('calculateTimeSpent', () => {
    it('returns the list with the time spent updated', () => {
      const chores = [
        { name: 'Erase blackboard', doneBy: 'Jamal', minutes: 6, timesDone: 4, timeSpent: 0 },
        { name: 'Take the trash out', doneBy: 'Ashley', minutes: 3, timesDone: 5, timeSpent: 0 },
        { name: 'Sweep up', doneBy: 'Casey', minutes: 14, timesDone: 1, timeSpent: 0 },
        { name: 'Feed the guinea pig', doneBy: 'Jamal', minutes: 8, timesDone: 2, timeSpent: 0 },
      ]

      const expectedOutput = [
        { name: 'Erase blackboard', doneBy: 'Jamal', minutes: 6, timesDone: 4, timeSpent: 24 },
        { name: 'Take the trash out', doneBy: 'Ashley', minutes: 3, timesDone: 5, timeSpent: 15 },
        { name: 'Sweep up', doneBy: 'Casey', minutes: 14, timesDone: 1, timeSpent: 14 },
        { name: 'Feed the guinea pig', doneBy: 'Jamal', minutes: 8, timesDone: 2, timeSpent: 16 },
      ]

      expect(calculateTimeSpent(chores)).to.deep.equal(expectedOutput)
    })
  })

  describe('filterByName', () => {
    it('returns only the chores done by the person specified', () => {
      const chores = [
        { name: 'Erase blackboard', doneBy: 'Jamal', minutes: 6 },
        { name: 'Take the trash out', doneBy: 'Ashley', minutes: 3 },
        { name: 'Sweep up', doneBy: 'Casey', minutes: 14 },
        { name: 'Feed the guinea pig', doneBy: 'Jamal', minutes: 8 },
      ]

      const expectedOutput = [
        { name: 'Erase blackboard', doneBy: 'Jamal', minutes: 6 },
        { name: 'Feed the guinea pig', doneBy: 'Jamal', minutes: 8 },
      ]

      expect(filterByName(chores, 'Jamal')).to.deep.equal(expectedOutput)
    })
  })

  describe('filterForQA', () => {
    it('returns only the logs that happened in QA', () => {
      const logs = [
        { environment: 'qa', timestamp: 1569703735, message: 'Everything died' },
        { enivronment: 'production', timestamp: 1569702286, message: 'Someone is having a bad weekend' },
        { environment: 'qa', timestamp: 1569704219, message: 'Garbage in, garbage out' },
      ]

      const expectedOutput = [
        { environment: 'qa', timestamp: 1569703735, message: 'Everything died' },
        { environment: 'qa', timestamp: 1569704219, message: 'Garbage in, garbage out' },
      ]

      expect(filterForQA(logs)).to.deep.equal(expectedOutput)
    })
  })
})
