import styles from './Service3Results.css';

import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

const { kakao } = window;

// var searchKey = "합정동 스타벅스"


function Service3Results(searchPlace) {
    const navigate = useNavigate();
    const [Places, setPlaces] = useState([])

    // 5월 31일에 추천된 카드 리스트를 받기 위해 추가한 코드들 //////
    // 33번째 줄에 {cards.cards} 를 통해 잘 받은 것을 알 수 있음
    const [cards, setCards] = useState({
        locationList: [{}]
    });

    useEffect(() => {
        fetch("/serviceThree/map")
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

        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(function (position) {
        //         var locPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);

        //         var imageSrc = 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/map-marker-icon.png';
        //         var imageSize = new kakao.maps.Size(60, 60);
        //         var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        //         var marker = new kakao.maps.Marker({
        //             map: map,
        //             position: locPosition,
        //             image: markerImage
        //         })

        //         marker.setMap(map);

        //         map.setCenter(locPosition);
        //     })
        // }


        // const ps = new kakao.maps.services.Places();

        // ps.keywordSearch(searchKey, placesSearchCB)

        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < cards?.locationList?.length; i++) {
            displayMarker(cards?.locationList[i]);
            
            bounds.extend(new kakao.maps.LatLng(cards?.locationList[i]?.mapy, cards?.locationList[i]?.mapx))
        }

        alert(cards?.locationList?.length)


        // function placesSearchCB(data, status, pagination) {
        //     if (status === kakao.maps.services.Status.OK) {
        //         let bounds = new kakao.maps.LatLngBounds()

        //         for (let i = 0; i < cards.locationList; i++) {
        //             displayMarker(cards.locationList[i])

        //             bounds.extend(new kakao.maps.LatLng(cards.locationList[i].mapy, cards.locationList[i].mapx))
        //         }

        //         map.setBounds(bounds)
        //         // 페이지 목록 보여주는 displayPagination() 추가
        //         // displayPagination(pagination)
        //         setPlaces(data)
        //     }
        // }

        // function placesSearchCB(data, status, pagination) {
        //     if (status === kakao.maps.services.Status.OK) {
        //         let bounds = new kakao.maps.LatLngBounds()

        //         for (let i = 0; i < data.length; i++) {
        //             displayMarker(data[i])

        //             bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        //         }

        //         map.setBounds(bounds)
        //         // 페이지 목록 보여주는 displayPagination() 추가
        //         // displayPagination(pagination)
        //         setPlaces(data)
        //     }
        // }

        // 검색결과 목록 하단에 페이지 번호 표시
        // function displayPagination(pagination) {
        //     var paginationEl = document.getElementById('pagination'),
        //         fragment = document.createDocumentFragment(),
        //         i

        //     // 기존에 추가된 페이지 번호 삭제
        //     while (paginationEl.hasChildNodes()) {
        //         paginationEl.removeChild(paginationEl.lastChild)
        //     }

        //     for (i = 1; i <= pagination.last; i++) {
        //         var el = document.createElement('a')
        //         el.href = '#'
        //         el.innerHTML = i

        //         if (i === pagination.current) {
        //             el.className = 'on'
        //         } else {
        //             el.onclick = (function (i) {
        //                 return function () {
        //                     pagination.gotoPage(i)
        //                 }
        //             })(i)
        //         }

        //         fragment.appendChild(el)
        //     }
        //     paginationEl.appendChild(fragment)
        // }

        // var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })



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
                '       <span class="title">' + place.brandName + '</span>' +
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
            <div className='myMap' id="myMap">
                
            </div>

            <div>
                {Places.map((item, i) => (
                    <div className='zone'>
                        <div className='zone1'>
                            {i + 1}
                        </div>

                        <div className='zone2'>
                            <div className='zone2-1'>
                                {item.place_name}
                            </div>

                            <div>
                                <hr />
                            </div>

                            <div className='zone2-2'>
                                {item.road_address_name}
                            </div>
                        </div>
                    </div>
                ))}

                <div id="pagination" className='page'>

                </div>
            </div>
        </div >
    );
}

export default Service3Results;