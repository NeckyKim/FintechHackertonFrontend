import styles from './Service3ResultsMore.css';

import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

const { kakao } = window;



var mydata = [
    {
        "brandName": "cafebakery_gongcha",
        "brandNameKor": "공차 홍대입구역점",
        "mapx": 126.924,
        "mapy": 37.5568,
        "date": "20220111",
        "time": "031442",
        "cost": 4500
    },
    {
        "brandName": "beauty_oliveyoung",
        "brandNameKor": "올리브영 홍대정문점",
        "mapx": 126.924,
        "mapy": 37.5531,
        "date": "20220111",
        "time": "241719",
        "cost": 7800
    },
    {
        "brandName": "cafebakery_twosomeplace",
        "brandNameKor": "투썸플레이스 홍대입구역점",
        "mapx": 126.923,
        "mapy": 37.5574,
        "date": "20220118",
        "time": "020306",
        "cost": 4500
    },
    {
        "brandName": "books_aladin",
        "brandNameKor": "알라딘중고서점 합정점",
        "mapx": 126.914,
        "mapy": 37.549,
        "date": "20220122",
        "time": "021927",
        "cost": 32000
    },
    {
        "brandName": "cafebakery_dunkindonuts",
        "brandNameKor": "던킨도너츠 홍대역점",
        "mapx": 126.923,
        "mapy": 37.5566,
        "date": "20220122",
        "time": "045526",
        "cost": 8200
    },
    {
        "brandName": "convstore_seveneleven",
        "brandNameKor": "세븐일레븐 홍익대2호점",
        "mapx": 126.923,
        "mapy": 37.5502,
        "date": "20220123",
        "time": "051047",
        "cost": 2200
    },
    {
        "brandName": "convstore_seveneleven",
        "brandNameKor": "세븐일레븐 홍익대2호점",
        "mapx": 126.923,
        "mapy": 37.5502,
        "date": "20220227",
        "time": "051047",
        "cost": 3500
    },
    {
        "brandName": "convstore_emart24",
        "brandNameKor": "이마트24 홍대서교점",
        "mapx": 126.928,
        "mapy": 37.5558,
        "date": "20220211",
        "time": "003800",
        "cost": 8300
    },
    {
        "brandName": "dining_burgerking",
        "brandNameKor": "버거킹 서교동사거리점",
        "mapx": 126.919,
        "mapy": 37.5527,
        "date": "20220220",
        "time": "024036",
        "cost": 13000
    },
    {
        "brandName": "dining_subway",
        "brandNameKor": "써브웨이 홍대아트점",
        "mapx": 126.926,
        "mapy": 37.5534,
        "date": "20220222",
        "time": "180524",
        "cost": 9500
    },
    {
        "brandName": "dining_dominos",
        "brandNameKor": "도미노피자 연희점",
        "mapx": 126.93,
        "mapy": 37.5666,
        "date": "20220224",
        "time": "175536",
        "cost": 14500
    },
    {
        "brandName": "movies_cgv",
        "brandNameKor": "CGV 홍대",
        "mapx": 126.923,
        "mapy": 37.5565,
        "date": "20220224",
        "time": "124246",
        "cost": 34000
    },
    {
        "brandName": "cafebakery_touslesjours",
        "brandNameKor": "뚜레쥬르 수원정자점",
        "mapx": 126.994,
        "mapy": 37.2952,
        "date": "20220226",
        "time": "005817",
        "cost": 12000
    },
    {
        "brandName": "cafebakery_twosomeplace",
        "brandNameKor": "투썸플레이스 북수원정자타운점",
        "mapx": 126.995,
        "mapy": 37.2952,
        "date": "20220227",
        "time": "095242",
        "cost": 4500
    },
    {
        "brandName": "convstore_gs25",
        "brandNameKor": "GS25 화서역파크점",
        "mapx": 126.995,
        "mapy": 37.2912,
        "date": "20220227",
        "time": "215230",
        "cost": 8300
    },
    {
        "brandName": "convstore_cu",
        "brandNameKor": "CU 화서문점",
        "mapx": 127.01,
        "mapy": 37.2854,
        "date": "20220229",
        "time": "223252",
        "cost": 4000
    },
    {
        "brandName": "deptstore_lottedept",
        "brandNameKor": "롯데백화점 수원점",
        "mapx": 126.997,
        "mapy": 37.2642,
        "date": "20220305",
        "time": "203945",
        "cost": 84000
    },
    {
        "brandName": "dining_mcdonalds",
        "brandNameKor": "맥도날드 수원정자DT점",
        "mapx": 127.002,
        "mapy": 37.2903,
        "date": "20220309",
        "time": "181708",
        "cost": 7300
    },
    {
        "brandName": "fuel_gsgas",
        "brandNameKor": "화서제일주유소",
        "mapx": 126.993,
        "mapy": 37.28,
        "date": "20220312",
        "time": "090541",
        "cost": 50000
    },
    {
        "brandName": "mart_gsmart",
        "brandNameKor": "GS더프레시 수원화서점",
        "mapx": 126.996,
        "mapy": 37.2889,
        "date": "20220312",
        "time": "090541",
        "cost": 17300
    },
]


function typeParser(type) {
    if (type === "credit\r") { return "신용카드" }
    else if (type === "check\r") { return "체크카드" }
    else if (type === "hybrid\r") { return "하이브리드 카드" }
}



function Service3ResultsMore(searchPlace) {
    const navigate = useNavigate();
    const [Places, setPlaces] = useState([])

    // 5월 31일에 추천된 카드 리스트를 받기 위해 추가한 코드들 //////
    // 33번째 줄에 {cards.cards} 를 통해 잘 받은 것을 알 수 있음
    const [cards, setCards] = useState({
        topTenCards: [{}],
        bestCardBenefits: [{}],
    });

    useEffect(() => {
        fetch("/results3")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setCards(data);
            });
    }, []);
    /////////////////////////////////////////////////////////

    useEffect(() => {
        var markers = []

        var mapContainer = document.getElementById('myMap');
        var mapOption = {
            center: new kakao.maps.LatLng(37.5568, 126.924),
            level: 3
        };
        var map = new kakao.maps.Map(mapContainer, mapOption);

        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < mydata.length; i++) {
            displayMarker(mydata[i]);
        }



        function displayMarker(place) {
            var imageSrc = 'https://cdn.icon-icons.com/icons2/567/PNG/512/marker_icon-icons.com_54388.png';
            var imageSize = new kakao.maps.Size(25, 35);
            var imageOption = { offset: new kakao.maps.Point(23, 75) };
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

            var marker = new kakao.maps.Marker({
                map: map,
                title: place.brandName,
                position: new kakao.maps.LatLng(place.mapy, place.mapx),
                image: markerImage,
                clickable: true
            })

            marker.setMap(map);

            var content =
                '<div class="customoverlay">' +
                '   <a target="_blank">' +
                '       <span class="title">' + place.brandNameKor + '</span>' +
                '   </a>' +
                '</div>';

            var customOverlay = new kakao.maps.CustomOverlay({
                position: new kakao.maps.LatLng(place.mapy, place.mapx),
                content: content,
                yAnchor: 1.2
            });

            customOverlay.setMap(map);
        }
    }, [searchPlace]);

    return (
        <div>
            <div className='myMap' id="myMap"></div>
            <br /><br />

            <div className='zonex'>
                <img
                    className='bestCardImage'
                    alt="cards"
                    src={process.env.PUBLIC_URL + '/images/card_images/' + cards?.topTenCards[0]?.id + '.png'} />
            </div>

            <div>
                <div className='bestCardName'>
                    {cards.topTenCards[0].name}
                </div>

            </div>

            <div className='line'>

            </div>

            <div className='zonez'>
                <div className='bestCardCompany'>
                    <div className='bestCardCompanyText'>
                        {typeParser(cards.topTenCards[0].type)}
                        │
                    </div>
                    <div>
                        <img
                            className='bestCardCompanyImage'
                            alt="cards"
                            src={process.env.PUBLIC_URL + '/images/card_logo/center_aligned/' + cards.topTenCards[0].company_eng + '.png'} />
                    </div>
                </div>
            </div>

            <button className='moreInfoButton1' onClick={() => {
                window.open("https://www.banksalad.com/cards/" + cards?.topTenCards[0]?.id + "/issue");
            }}>
                카드사 홈페이지
            </button>

            <button className='moreInfoButton2' onClick={() => {
                window.open("https://www.banksalad.com/cards/" + cards?.topTenCards[0]?.id + "/issue");
            }}>
                카드 상세 정보
            </button>
        </div>
    );
}

export default Service3ResultsMore;