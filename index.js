import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/',(req,res)=>{

res.send("done")

});


const root = {friend: ()=> {

    return{
        "id": 12345,
        "firstName": "Girik",
        "lastName": "Soni",
        "gender": "Male",
        "language": "English/Hindi",
        "emails": [
            {email: "giriksoni0710@gmail.com"},
            {email: "girikdash1992@gmail.com"}
        ]

    }

}};

app.use('/graphql', graphqlHTTP({

    schema: schema,
    rootValue: root,
    graphiql: true

}))


app.listen('8080', ()=>{

    console.log("Running server on port:8080")
})