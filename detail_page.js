function get_url_info(key) {
    let url = location.href; // 224-2.페이지이동_연습2(상세페이지).html?cateNo=0&itemNo=2 
    url = url.split("?");// [224-2.페이지이동_연습2(상세페이지).html  ,  cateNo=0&itemNo=2 ]
    if(url.length > 1) { // 1개보다 크면 정보가(?) 1개 이상 있다 라는 뜻
        url = url[1].split("&"); // cateNo=0&itemNo=2  =>  [cateNo=0, itemNo=2]

        for(let i=0; i<url.length; i++){
            let tmp_url=url[i].split("=") // i=0, cateNo=0 => [cateNo , 0]
                                        // i=1, itemNo=2 => [itemNo , 2]
                
            if(tmp_url[0] == key) {
                console.log(tmp_url[1])
                return tmp_url[1];
            }
        }   
    }
} 
let idx = get_url_info("item_no");
if(idx == undefined) {
    location.replace('./main_page.html')
}

console.log("itemNo: ",idx)
let item = ITEM_LIST[idx];

document.getElementsByClassName('main_box')[0].innerHTML = `
        <div class="main_p_pic">
            <img src="./zara_img/${item.src}" alt="">
        </div>
        <div class="main_desc_box">
            <div class="title_box">
                <div class="p_title">${item.title}</div>
                <div class="p_price">₩ ${item.price.toLocaleString('kr')}</div>
                <div class="line_bot"></div>
            </div>

            <div class="add_button"><a href="">추가하기</a></div>
            <div class="buy_button"><a href="">구매하기</a></div>

            <div class="detail_desc">${item.desc}</div>
            <div class="line_bot2"></div>

            <div class="more_info">
                <div class="info">혼용률, 세탁 방법 및 원산지</div>
                <div class="info">오프라인 매장에 재고 상태 보기</div>
                <div class="info">배송, 교환 및 반품</div>
            </div>
        </div>
`

let pan = document.getElementsByClassName('pan')
let b_count = pan.length

let btn_chk = true;
let indi_box =document.getElementsByClassName('indi_box')[0]; 
 let ttt = ['여성','남성','아동','HOME','BEAUTY']
  for(let i=0; i <pan.length; i++){
    indi_box.innerHTML +=`<li class="nav_indi" data-idx=${i}> ${ttt[i]} </li>`
  }
  
let nav_indi =document.getElementsByClassName('nav_indi'); 
//   nav_indi[0].classList.add('active')

  for(let i=0; i<nav_indi.length; i++){
    nav_indi[i].addEventListener('click', function(){

        let nav_clicked_idx = this.getAttribute('data-idx');

        
        for(let j=0; j<pan.length; j++) {
            pan[j].classList.remove('pan_women')
        }

        pan[nav_clicked_idx].classList.add('pan_women')
        // if(btn_chk){
        //     if(idx < sel_indi_idx)
        //         slide(-1, sel_indi_idx, 1)
        //     else if(idx > sel_indi_idx)
        //         slide(1, sel_indi_idx, -1)
        // }
    })
  }


  
