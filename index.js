const express =require ("express")
const app=express()

const questions=[
    {
        question:"how to install python",
        slug:"how-to-install-python",
        votes:4,
        views:15,
        tags:'python,pip,query'
    },
    {
        question:"how to install-python2",
        slug:"how-to-install-python2",
        votes:3,
        views:13,
        tags:'python2,pip,query'
    },
    {
        question:"how to install-python3",
        slug:"how-to-install-python3",
        votes:4,
        views:1,
        tags:'python3,pip,query'
    },
    {
        question:"how to install-python4",
        slug:"how-to-install-python4",
        votes:7,
        views:10,
        tags:'python4,pip,query'
    }
]

const tags=[
    {
        name:'python',
        desc:"Python and its broad variety of libraries are very well suited to develop customized machine learning tools which tackle the complex challenges"
        
    },
    {
        name:'java',
        desc:"java and its broad variety of libraries are very well suited to develop customized machine learning tools which tackle the complex challenges"
        
    },
    {
        name:'networking',
        desc:"networking and its broad variety of libraries are very well suited to develop customized machine learning tools which tackle the complex challenges"
        
    }
]

const users=[
    {
        name:"narendra",
        location:"vizag",
        followers:250

    },
    {
        name:"ravi",
        location:"kurnool",
        followers:388

    },  {
        name:"sai",
        location:"vijyawada",
        followers:450

    },  {
        name:"krishna",
        location:"hyderabad",
        followers:300

    }
]

const companies=[
    {
        company:'amazon',
        salary:35000,
        adderss:'hyd'
    },
    {
        company:'wipro',
        salary:55000,
        adderss:'banglore'
    },
    {
        company:'genpact',
        salary:30000,
        adderss:'chennai'
    }
]

app.get("/",(req,res)=>{
    res.send("home")
})
app.get("/questions",(req,res)=>{
    res.send(questions)
})
app.get("/questions/:slug",(req,res)=>{
    console.log(req.params.slug)
    const slug=req.params.slug
    questions.map(obj=>{
        if(obj.slug === slug){
            res.send(obj)
        }
    })
    res.send("question not found")
})
app.get("/users",(req,res)=>{
    res.send(users)
})
app.get("/tags",(req,res)=>{
    res.send(tags)
})
app.get("/jobs/companies",(req,res)=>{
    res.send(companies)
})

app.listen(3000,()=>{
    console.log("server is running...")
})