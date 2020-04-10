import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import questionOne from './questionOne'

describe('QuestionOne Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(questionOne)
        userConverse = converse.createUser({
            session: {
                message: {
                    source: 'website'
                }
            }
        })
    })

    it('Sample Test', () => {
        return userConverse
            .conversation(
                user `test`,
                bot `QuestionOne skill works !`
            )
    })
})