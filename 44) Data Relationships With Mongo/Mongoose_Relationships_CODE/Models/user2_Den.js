// ONE TO FEW (RELATIONSHIP). [IN MONGOOSE]

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [  // In this model, we're keeping "addresses" inside 'user' data.
        {
            _id: { id: false },  // this means: don't create an id for this object here.
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})
const User = mongoose.model('User', userSchema);


// const makeUser = async () => {
//     const u = new User({
//         first: 'Harry',
//         last: 'Potter'
//     })
//     u.addresses.push({
//         street: '123 Sesame St.',
//         city: 'New York',
//         state: 'NY',
//         country: 'USA'
//     })
//     const res = await u.save()
//     console.log(res)
// }
// makeUser();


const addAddress = async (id) => {
    const user = await User.findById(id);    
    user.addresses.push(
        {
            street: '99 3rd St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res);
}
addAddress("64c35a6603f2b421c0c10e48");
