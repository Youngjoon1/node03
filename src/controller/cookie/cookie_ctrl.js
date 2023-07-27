const cookieConfig = {
    httpOnly : true,
    maxAge : 5000
}

const index = (req,res) =>{
    
    // if(req.cookies != undefined) {
    //     userCookie = req.cookies,myCookie;
    // }
    let userCookie = req.cookies.myCookie;
    // const userCookie = req.cookies.myCookie
    res.cookie("myCookie","valueCookie", cookieConfig);
    res.render("cookie/cookie01", {userCookie});
}

const popup =(req,res)=>{
    res.render("cookie/popup");
}

const quiz = (req,res)=>{
    const userCookie = req.cookies.myCookie;
    
    res.render("cookie/quiz",{userCookie});
}
const quizPopup = (req,res) => {
    res.render("cookie/quizPopup");

}

const makeCookie = (req,res) => {
    res.cookie("myCookie","value",cookieConfig);
    res.render("cookie/quizPopup");
}


module.exports={index, popup, quiz, quizPopup, makeCookie};