import ReactDOM from "react-dom";
import React, { Component } from "react";

// tools pics
const js_pic = <img src={require('../src/js.png')} alt="js" id="js_pic"></img>;
const css_pic = <img src={require('../src/css.png')} alt="css" id="css_pic"></img>;
const react_pic = <img src={require('../src/react.png')} alt="react" id="react_pic"></img>;
const mysql_pic = <img src={require('../src/mysql.png')} alt="mysql" id="mysql_pic"></img>;
const postgres_pic = <img src={require('../src/postgres.png')} alt="postgres" id="postgres_pic"></img>;

// hobbies pics
const scuba_pic = <img src={require('../src/scuba.png')} alt="scuba" id="scuba_pic"></img>;
const guitar_pic = <img src={require('../src/guitar.png')} alt="guitar" id="guitar_pic"></img>;
const games_pic = <img src={require('../src/games.png')} alt="games" id="games_pic"></img>;

// github
const git_pic = <img src={require('../src/git.png')} alt="github" id="git_pic"></img>;

class App extends Component{
  render(){
    return(
      <div id="main">
        <div class="parallax" id="my_photo"></div>
        <p class="photo_title" id="name">Luis Diego Fernández</p>
        <p class="photo_title" id="moto">Simple Minimalistic Design, As It Should Be</p>
        <div id="about_me">
          <p>"Since I can remember I've always loved to create new things, I think that's
             the reason why I ended choosing Computer Science as my career. I don't
             think there is a another career when I can design and implement solutions
             in such innovative and unique ways as I can in the field of CS. That's why
             with every new task I get I always make sure to give it my all, because
             in a field with so many solutions only the best one should be acceptable."
           </p>
        </div>
        <div class="parallax" id="my_tools"></div>
        <div id="core">
          <h1> My Core Toolbelt </h1>
          <p> "Remember, an agent is only as good as his gadgets" - Juni(Spy Kids 2, 2001)</p>
          <div class="grid_core_tech">
            <div id="CSS"> {css_pic} </div>
            <div id="JavaScript"> {js_pic} </div>
            <div id="React"> {react_pic} </div>
            <div id="MySQL"> {mysql_pic} </div>
            <div id="Postgres"> {postgres_pic} </div>
          </div>
        </div>
        <div class="parallax" id="my_uni"></div>
        <div id="studies">
          <h1> My Studies</h1>
          <ul>
            <li> 4 years of Engineering in Computer Science Universidad del valle de Guatemala </li>
            <li> International Baccalaureate - School: Centro Escolar Solalto </li>
            <li> Baccalaureate in Science & Literature - School: Centro Escolar Solalto</li>
          </ul>
        </div>
        <div class="parallax" id="my_interests"></div>
        <div id="interests">
          <h1> Things I Enjoy Doing In My Free Time</h1>
          <p> "You never lose a dream, it just incubates as a hobby" - Larry Page</p>
          <div class="grid_interests">
            <div id="scuba"> {scuba_pic} </div>
            <div id="guitar"> {guitar_pic} </div>
            <div id="games"> {games_pic} </div>
          </div>
        </div>
        <div class="parallax" id="my_info"></div>
        <div id="info">
          <h1> &#x2B06; And to finnish, here is a picture of my dog watching you &#x2B06; </h1>
          <p> Also here is some of my contact info:</p>
          <ul>
            <li> luisdiegofv97@gmail.com </li>
            <li> +502 5826-4014 </li>
          </ul>
          <a href="https://github.com/LuisDiego19FV/Presentation_card" id="git_link">{git_pic}</a>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App/>,  document.getElementById("app"));
