import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import questionTwo from './questionTwo'

describe('QuestionTwo Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(questionTwo)
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
                bot `QuestionTwo skill works !`
            )
    })
})