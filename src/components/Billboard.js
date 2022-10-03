import { useState } from "react";
import Title from "./Title";
import FilterBar from "./FilterBar";
import Card from "./Card";
import "./Billboard.css";


function Billboard() {

    const cards = [
        {
          id: 109945,
          name: "Surfing Lessons",
          description: "A course for learning how to be one with the waves.",
          price: "7.5$ per hour",
          phoneNumber: "03-9912345",
          address: "Gordon Beach, Tel-Aviv",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg",
        },
    
        {
          id: 116733,
          name: "Car Wash",
          description: "A reliable family buisness, guaranteed best cleaning quality for your vehicles.",
          price: "10.00$ plus standard wax treatment",
          phoneNumber: "03-9998765",
          address: "BIG Outlet, Rishon Le Zion",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/03/27/14/58/car-wash-2179231_960_720.jpg",
        },
        {
          id: 122345,
          name: "Karate Lessons",
          description: "Come learn traditional karate for self defense.",
          price: "35.00$ per month, first two weeks free of charge",
          phoneNumber: "03-9913579",
          address: "Hertzel street, Rehovot",
          imageUrl:
            "https://cdn.pixabay.com/photo/2019/02/17/13/47/karate-4002261_960_720.png",
        },
        {
            id: 167485,
            name: "Experienced Dog Sitter",
            description: "Going on Vacation? Leave your dog with a caring dog lover (up to 4 dogs).",
            price: "2.00$ per day",
            phoneNumber: "03-9954701",
            address: "Dizengoff street, Tel-Aviv",
            imageUrl:
              "https://cdn.pixabay.com/photo/2014/02/24/08/28/huskies-273409_960_720.jpg",
          },
          {
            id: 194003,
            name: "Arik's Falafel Joint",
            description: "Enjoy a nice meal in an isreali authentic restaurant.",
            price: "1.50$ per pita sandwich",
            phoneNumber: "03-9462037",
            address: "Jaffa street, Jerusalem",
            imageUrl:
              "https://cdn.pixabay.com/photo/2022/08/27/13/54/falafel-sandwich-7414511_960_720.jpg",
          },
          {
            id: 173265,
            name: "Cinema Palace",
            description: "Enjoy various movies from every genre, while eating freshly made popcorn.",
            price: "7.00$ per ticket plus popcorn and drink",
            phoneNumber: "03-9047736",
            address: "Moshe Dayan street, Rishon Le Zion",
            imageUrl:
              "https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_960_720.jpg",
          },
      ];

      const [display, setDisplay] = useState("grid");
      
      const [bizCard, setBizCard] = useState(cards);

      const [bizCardFiltered, setBizCardFiltered] = useState(cards);
      

      function searchBiz(value) {
        let result = [...bizCard];
        if (value.length > 0) {
            result = bizCard.filter(bizName => bizName.name.toLowerCase().includes(value.toLowerCase()))
        }
        setBizCardFiltered(result)
      }


    return ( 

        <>
            <Title mainTxt="BizAd">
            <h5 className="main-para text-white">
                Advertising your business
                <i className="bi bi-briefcase ms-2"></i>
            </h5>
            </Title>

            <div className="filter-bar">
                <FilterBar search={searchBiz}/>

                <div className="btn-group">
                    <div>
                        <button
                            onClick={(e) => setDisplay("list")}
                            className="btn btn-default bg-primary text-white me-3"
                        >
                            <i className="bi-list-ul"></i>
                        </button>

                        <button
                            onClick={(e) => setDisplay("grid")}
                            className="btn btn-default bg-primary text-white"
                        >
                            <i className="bi-grid-3x3-gap-fill"></i>
                        </button>
                 </div>
                </div>
            </div>

            
            <div className={display}>
                {bizCardFiltered.map((card) => (
                    <Card 
                        key={card.id}
                        data={card}
                    />
                    ))}
            </div>
        </>
        
     );
}

export default Billboard;