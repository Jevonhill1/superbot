import formats from 'newbot-formats'
import code from './main.converse'
import languages from './languages'
import helloSkill from './skills/hello/hello'
import bookingSkill from './skills/booking/booking'

export default {
    code,
    languages,
    skills: {
        formats,
        helloSkill,
        bookingSkill
    
    }
}