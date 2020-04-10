import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import diagnosis from './diagnosis'

describe('Diagnosis Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(diagnosis)
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
                bot `Diagnosis skill works !`
            )
    })
})