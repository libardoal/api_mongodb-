const mongose = require ("mongoose");
const schema = mongoose.schema;

const UserSchema =new schema ({
    name: {type: string },
    username:{type:string},
    password: {type:string}
})
module.esports = User = mongoose.model('User',UserSchema);