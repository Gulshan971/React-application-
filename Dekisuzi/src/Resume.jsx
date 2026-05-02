export const Resume = () => {
  const phoneNumber = 7985476928
  const emailId = "gulshnrajdev47595@gmail.com"
    return (
        <>
        <div style = {{ display: "flex", justifyContent: "flex-start" }}>
           <div style ={{width : "65%"}}>
                <h3>Mobile Number : <p>{phoneNumber}</p></h3>
                <h3>Email : <p>{emailId}</p> </h3>
                <h3>About : Hello myself Gulshan Rajdev. I believe learning is the tool that can make any situation true. This ideology inspire me to extract minute information about every aspect . I am interested in Game Development , Web development and AI-ML . I am third year B-Tech student at BBAU , Central University , Lucknow . I wishes to make time travel possible via using upgrading technology . Pronoun : He / him / his Fun Fact : I do learn from my failure and I don't know how to click on a mouse in my school . 
                </h3>
                </div>
            <div style={{ width: "50%" , height : "50%" , borderRadius : "5px" }}>
                <img src="https://th.bing.com/th/id/OIP.qERRGBFe0kwb_5Rq6eKClgHaE7?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="GR" width = "40%" height = "40%"/>
            </div>
        </div>
        <Internship/>
        <Internship/>
        <Hackathons/>
        <Hackathons/>
       </>
    );
}

// we are creating a component that leads to reusable code and provide usecase for complex objects
const Internship = () => {
  const organization = "AutoRabit" ; 
  const timePeriodCalcuator = (takeDate) => {
      try{
          const inputDate = new Date(takeDate).getTime() ;
          if(isNaN(inputDate)){
            throw new Error("Enter correct format") ;
          }
          const today = Date.now() 
          let diffMs = Math.abs(today - inputDate)

          const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)) ;
          return days ;
        }
        catch(error){
          console.log(error.message) ;
          return null ;
        }
  }
    return(
        [
        <h2> Organization Name : {organization}</h2> ,
        <h2> Duration : { timePeriodCalcuator("09-07-2025")}</h2> ,
        <p>Learning : Java , NetBeans </p> ,
        <img src="https://i.pinimg.com/originals/4d/a8/e1/4da8e188dacdacad0d43bbbc34a048fe.jpg" alt="Certificate1" width = "50%"  position = "center" />
        ]
    );
}
const Hackathons = () => {
    return(
      <div>
        <h2> Institute Name : MoE</h2>
        <h2> Team Members : Stan , Juil , Lain , Kol</h2>
        <p>Role: Backend Developer </p>
        <h2>Position : Third</h2>
        <img src="https://tse4.mm.bing.net/th/id/OIP.pb6sQiP0haEHM1JNRve12QHaFP?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Certificate1" width = "50%" />
      </div>
    );
}