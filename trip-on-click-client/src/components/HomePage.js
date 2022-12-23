import React from 'react';
//import './HomePage.css';
import styled from "styled-components";
import Button2 from "./login/Button2";
import { Link, useNavigate } from "react-router-dom"; 
import Navbar from './login/MyNavbar';
import MyNavbar from './login/MyNavbar';
//import "../css/HomePage.css";

function HomePage() {



   const navigate = useNavigate();
  
    return (
    
   
     <HomePageContainer>
        
        <Header>
          TripOnClick
        </Header>
        <MyNavbar/>
        
        <AboutUs>
       
          <h2>מי אנחנו?</h2>
          <p>פלטפורמה שתעזור לכם לארגן את טיול החלומות שלכם בקליק</p>
          <p>אנו נבנה לכם לו"ז מסודר של כל הפעילויות והאטרקציות המותאמות במיוחד בשבילכם</p>      
          <p>מעתה, לא צריך לדאוג ולברר מתי כל אתר פתוח </p>
          <p>אנחנו נסדר לכם את הכל לפי השעות המתאימות והעדפות שתזינו</p>
          <p>תקבלו מאיתנו את התוכנית לטיול שלכם על גבי מפה, יומן או כמסלול ש יום אחר יום </p>
          <p> !אז קדימה ארזו את המזוודות</p>
        </AboutUs>

   
        

      </HomePageContainer>
    );
  }
  
   
//     //const externalImage= 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.masa.co.il%2Fwp-content%2Fuploads%2F2019%2F04%2Fnature1.jpg&imgrefurl=https%3A%2F%2Fwww.masa.co.il%2Farticle%2F%25D7%2598%25D7%2599%25D7%2595%25D7%259C%25D7%2599%25D7%259D-%25D7%2591%25D7%2598%25D7%2591%25D7%25A2-%25D7%259C%25D7%2597%25D7%2595%25D7%2595%25D7%25AA-%25D7%2590%25D7%25AA-%25D7%2594%25D7%25A2%25D7%2595%25D7%25A6%25D7%259E%25D7%2594%2F&tbnid=cGPTwDqcJJS8qM&vet=12ahUKEwi4pMectI38AhW2DRAIHQ9sB0kQMygOegUIARDcAQ..i&docid=1bJNfBB_dav8GM&w=592&h=395&q=%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20%D7%A9%D7%9C%20%D7%98%D7%99%D7%95%D7%9C%20%D7%91%D7%98%D7%91%D7%A2%20%D7%90%D7%99%D7%9B%D7%95%D7%AA%20%D7%98%D7%95%D7%91%D7%94&ved=2ahUKEwi4pMectI38AhW2DRAIHQ9sB0kQMygOegUIARDcAQ'
//   return (
   
//     <div className="homepage" >
    
//       <HederText>
//         <header>
//           <ButtonContainer>
//             <Button2 content="..." type="submit" onClick={ ()=>navigate("/Navbar")}/>    
//           </ButtonContainer>
      
//           <h1>האתר לטיול המושלם שלך</h1>
        
//         </header>
//       </HederText> 
     

//       <div>
//         <main>
//           <h2>מי אנחנו?</h2>
//           <p>המלל של מי אנחנו יהיה כתוב פה בעה</p>
//           <button2  content="צור טיול " type="submit" onClick={ ()=>navigate("/homepage")}>צור טיול</button2>
//         </main>
//       </div>

//       <div>
//           <footer>
//             <p>Copyright 2021 Trips Website</p>
//           </footer>
//       </div>
//     </div>
//   );

 
const HomePageContainer = styled.div`
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10hPgODr-2r-u3h5LrMUpu_26OvG-wegOTpamX2Tnwg&s');
  background-size: cover;
  display: flex;
  margin: auto;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #333;
`;

const AboutUs = styled.div`
  width: 80%;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
`;

export default HomePage;
