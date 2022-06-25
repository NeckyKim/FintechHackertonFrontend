import styles from './Service3.module.css';
import ReactApexChart from "react-apexcharts"; 

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function dateParser(date) {
    return String(date).slice(0,4) + "년 " + String(date).slice(4,6) + "월 " + String(date).slice(6,8) + "일"
}

function categoryTranslator(brandname) {
    if (
        brandname == '버스' ||
        brandname == '지하철' ||
        brandname == '택시' ||
        brandname == 'KORAIL' ||
        brandname == 'SRT'
        ) {
        return "교통"
    }

    else if (
        brandname == 'SK텔레콤' ||
        brandname == 'KT' ||
        brandname == 'LG유플러스' ||
        brandname == 'KT olleh 인터넷' ||
        brandname == 'SKT 인터넷' ||
        brandname == 'LG U+ 인터넷' ||
        brandname == 'SKT IPTV' ||
        brandname == 'KT IP-TV' ||
        brandname == 'LG U+ IPTV' ||
        brandname == 'SKT 인터넷전화' ||
        brandname == 'KT 인터넷전화' ||
        brandname == 'LG U+ 인터넷전화'
        ) {
        return "통신"
    }

    else if (
        brandname == '이마트' ||
        brandname == '홈플러스' ||
        brandname == '롯데마트' ||
        brandname == '농협하나로마트' ||
        brandname == '이마트 트레이더스' ||
        brandname == 'VIC 마켓' ||
        brandname == '하나로클럽' ||
        brandname == '코스트코' ||
        brandname == '홈플러스익스프레스' ||
        brandname == '이마트 에브리데이' ||
        brandname == 'GS마트' ||
        brandname == '롯데슈퍼' ||
        brandname == 'GS THE FRESH'
        ) {
        return "마트"
    }

    else if (
        brandname == 'GS25' ||
        brandname == 'CU' ||
        brandname == '세븐일레븐' ||
        brandname == '미니스톱' ||
        brandname == '이마트24' ||
        brandname == '바이더웨이'
        ) {
        return "편의점"
    }

    else if (
        brandname == 'CGV' ||
        brandname == '롯데시네마' ||
        brandname == '메가박스' ||
        brandname == 'CGV 온라인' ||
        brandname == '메가박스 온라인' ||
        brandname == '롯데시네마 온라인' ||
        brandname == '티켓링크 영화' ||
        brandname == '인터파크 영화' ||
        brandname == 'YES24 영화' ||
        brandname == '네이버영화' ||
        brandname == '맥스무비'
        ) {
        return "영화"
    }

    else if (
        brandname == '넷플릭스' ||
        brandname == '유튜브 프리미엄' ||
        brandname == '왓챠' ||
        brandname == '웨이브' ||
        brandname == '멜론' ||
        brandname == 'genie'
        ) {
        return "엔터테인먼트"
    }

    else if (
        brandname == '신세계백화점' ||
        brandname == '롯데백화점' ||
        brandname == '현대백화점' ||
        brandname == '갤러리아 백화점' ||
        brandname == 'AK플라자 백화점' ||
        brandname == '롯데영플라자' ||
        brandname == '현대백화점 U-PLEX' ||
        brandname == '디큐브백화점' ||
        brandname == '뉴코아백화점'
        ) {
        return "백화점"
    }

    else if (
        brandname == '11번가' ||
        brandname == 'G마켓' ||
        brandname == '옥션' ||
        brandname == '네이버쇼핑' ||
        brandname == '인터파크' ||
        brandname == 'GS SHOP' ||
        brandname == '롯데닷컴' ||
        brandname == '롯데아이몰' ||
        brandname == 'SSG닷컴' ||
        brandname == '신세계몰' ||
        brandname == 'AK몰' ||
        brandname == '이마트몰' ||
        brandname == '현대Hmall' ||
        brandname == '쿠팡' ||
        brandname == '위메프' ||
        brandname == '티몬'
        ) {
        return "온라인쇼핑몰"
    }

    else if (
        brandname == '네이버페이' ||
        brandname == '카카오페이' ||
        brandname == '삼성페이'
        ) {
        return "간편결제"
    }

    else if (
        brandname == '스타벅스' ||
        brandname == '스타벅스 APP 사이렌오더' ||
        brandname == '투썸플레이스' ||
        brandname == '이디야커피' ||
        brandname == '할리스커피' ||
        brandname == '카페베네' ||
        brandname == '탐앤탐스' ||
        brandname == '엔제리너스' ||
        brandname == '공차' ||
        brandname == '파스쿠찌' ||
        brandname == '커피빈' ||
        brandname == '폴 바셋' ||
        brandname == '배스킨라빈스 31' ||
        brandname == '나뚜루' ||
        brandname == '던킨도너츠' ||
        brandname == '크리스피크림' ||
        brandname == '미스터도넛' ||
        brandname == '스무디킹' ||
        brandname == '파리바게뜨' ||
        brandname == '뚜레쥬르' ||
        brandname == '파리크라상'
        ) {
        return "카페/베이커리"
    }

    else if (
        brandname == '올리브영' ||
        brandname == '랄라블라' ||
        brandname == '롭스'
        ) {
        return "뷰티"
    }

    else if (
        brandname == '아웃백스테이크하우스' ||
        brandname == 'T.G.I.F' ||
        brandname == '세븐스프링스' ||
        brandname == 'VIPS' ||
        brandname == '애슐리' ||
        brandname == '매드포갈릭' ||
        brandname == '베니건스' ||
        brandname == '맥도날드' ||
        brandname == '버거킹' ||
        brandname == '롯데리아' ||
        brandname == 'KFC' ||
        brandname == '써브웨이' ||
        brandname == '인앤아웃버거' ||
        brandname == '노브랜드버거' ||
        brandname == '맘스터치' ||
        brandname == '굽네치킨' ||
        brandname == '도미노 피자' ||
        brandname == '미스터피자' ||
        brandname == '피자헛' ||
        brandname == '파파존스피자'
        ) {
        return "외식"
    }

    else if (
        brandname == '교보문고' ||
        brandname == '반디앤루니스' ||
        brandname == '영풍문고' ||
        brandname == '인터넷 교보문고' ||
        brandname == '반디앤루니스 온라인' ||
        brandname == '인터넷 영풍문고' ||
        brandname == 'YES24 도서' ||
        brandname == '인터파크 도서' ||
        brandname == '알라딘'
        ) {
        return "도서"
    }

    else if (
        brandname == '롯데월드' ||
        brandname == '에버랜드' ||
        brandname == '서울랜드' ||
        brandname == '경주월드' ||
        brandname == '캐리비안 베이'
        ) {
        return "테마파크"
    }

    else if (
        brandname == 'GS칼텍스 휘발유' ||
        brandname == 'SK엔크린 휘발유' ||
        brandname == '현대오일뱅크 휘발유' ||
        brandname == 'S-Oil 휘발유' ||
        brandname == 'GS칼텍스 경유' ||
        brandname == 'SK엔크린 경유' ||
        brandname == '현대오일뱅크 경유' ||
        brandname == 'S-Oil 경유' ||
        brandname == 'GS칼텍스 LPG' ||
        brandname == 'SK엔크린 LPG' ||
        brandname == '현대오일뱅크 LPG' ||
        brandname == 'S-Oil LPG' ||
        brandname == 'GS칼텍스 등유' ||
        brandname == 'SK엔크린 등유' ||
        brandname == '현대오일뱅크 등유' ||
        brandname == 'S-Oil 등유' ||
        brandname == '주유 휘발유' ||
        brandname == '주유 경유' ||
        brandname == '주유 LPG' ||
        brandname == '주유 등유'
        ) {
        return "주유"
    }

    else {
        return "기타"
    }
}






function Service3() {
    const [mydata, setMydatas] = useState({
        bank_name: "",
        res_list: [{}],
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/serviceThree/save")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setMydatas(data);
            });
    }, []);

    var total_transport = 0
    var total_communication = 0
    var total_mart = 0
    var total_convstore = 0
    var total_movies = 0
    var total_entertainment = 0
    var total_deptstore = 0
    var total_onlineshopping = 0
    var total_easypay = 0
    var total_cafebakery = 0
    var total_beauty = 0
    var total_dining = 0
    var total_books = 0
    var total_themepark = 0
    var total_fuel = 0

    var total = 0

    for (var i = 0; i < mydata.res_list.length; i++) {
        var currentCategory = categoryTranslator(mydata.res_list[i].printed_content);

        var currentAmount = mydata.res_list[i].tran_amt

        if (currentCategory == "교통") {
            total_transport += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "통신") {
            total_communication += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "마트") {
            total_mart += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "편의점") {
            total_convstore += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "영화") {
            total_movies += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "엔터테인먼트") {
            total_entertainment += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "백화점") {
            total_deptstore += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "온라인쇼핑몰") {
            total_onlineshopping += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "간편결제") {
            total_easypay += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "카페/베이커리") {
            total_cafebakery += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "뷰티") {
            total_beauty += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "외식") {
            total_dining += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "도서") {
            total_books += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "테마파크") {
            total_themepark += currentAmount
            total += currentAmount
        }

        else if (currentCategory == "주유") {
            total_fuel += currentAmount
            total += currentAmount
        }
    }

    const donutData = {
        series: [
            total_transport, 
            total_communication, 
            total_mart, 
            total_convstore, 
            total_movies,
            total_entertainment,
            total_deptstore,
            total_onlineshopping,
            total_easypay,
            total_cafebakery,
            total_beauty,
            total_dining,
            total_books,
            total_themepark,
            total_fuel
        ],
        options: {
            chart: {
                type: 'donut',
            },
            legend: {
                position: 'bottom'
            },
            responsive: [{
                breakpoint: 480,
            }],
            plotOptions: {
                pie: {
                    donut: {
                        hollow: {  
                          margin: 15,
                          size: '100%',
                          image: '../../css/images/a-icon.jpg',
                          imageWidth: 64,
                          imageHeight: 64,
                          imageClipped: false
                        },
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true,
                                fontSize: '24px',
                                color: 'red'
                            },
                            value: {
                                fontSize: '22px',
                                show: true,
                                color: 'blue',
                            },
                        },
                    }
                }
            },

            labels: ["교통", "통신", "마트", "편의점", "영화", "엔터테인먼트", "백화점", "온라인쇼핑몰", "간편결제", "카페/베이커리", "뷰티", "외식", "도서", "테마파크", "주유"],
        },
    }
    

    return (
        <div>
            <h1>계좌 거래내역</h1>
            <h2>최근 한 달간 거래내역을 조회합니다.</h2>
            <br /><br />

            <div>
                <div id="chart" className={styles.chart}>
                    <ReactApexChart
                        options={donutData.options}
                        series={donutData.series}
                        type="donut"
                        width="800"
                    />
                </div>
            </div>
            <br/><br/>
            
                {mydata.res_list.map(cur => (
                    <div className={styles.transactionZone}>
                        <div className={styles.zone1}>
                            <div className={styles.zone11}>
                                {dateParser(cur.tran_date)}
                                <br />
                            </div>
                            <div className={styles.zone12}>
                                {cur.printed_content}
                            </div>
                            <div className={styles.zone13}>
                                {categoryTranslator(cur.printed_content)}
                            </div>
                        </div>
                        
                        <div className={styles.zone2}>
                            {cur.tran_amt}원
                        </div>
                    </div>                      
                ))}
                <br/><br/>

                <button className={styles.sendButton} onClick={() => {
                    navigate('/service3/results');
                }}>
                    추천받기
                </button>
        </div >
    );
}

export default Service3;




// import styles from '../Service.module.css';

// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';


// function Service3() {
//     const [mydata, setMydatas] = useState({
//         bank_name: "",
//         res_list: [{}],
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch("/serviceThree/save")
//             .then((response) => {
//                 return response.json();
//             })
//             .then(data => {
//                 setMydatas(data);
//             });
//     }, []);

//     return (
//         <div>

//             {mydata?.bank_name}
//             <button onClick={() => {
//                 navigate('/service3/results')
//             }}>
//                 추천받기
//             </button>


//         </div >
//     );
// }

// export default Service3;