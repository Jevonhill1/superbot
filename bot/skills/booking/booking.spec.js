import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import booking from './booking'

describe('Booking Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(booking)
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
                bot `Booking skill works !`
            )
    })
})