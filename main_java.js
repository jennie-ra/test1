let p_item_list = document.getElementsByClassName('p_item_list')[0];
let p_list_count = 0  
function put_item(num) {
    for(let i=p_list_count; i<p_list_count+num; i++) {
    
        p_item_list.innerHTML +=
                `<li class="p_list">
                    <div class="pro_img_box">
                    
                        <a href="./detail_page.html?item_no=${ITEM_LIST[i].item_no}">
                            <img src="./zara_img/${ITEM_LIST[i].src}" alt="" class="list_img">
                            <div class="size_chk">
                                <span>+</span>
                            </div>
                            <ul class="size_list_box">
                                <li class="size_list">XS (KR 44)</li>
                                <li class="size_list">S (KR 55)</li>
                                <li class="size_list">M (KR 66)</li>
                                <li class="size_list">L (KR 77)</li>
                                <li class="size_list">XL (KR 88)</li>
                                <li class="size_list">사이즈 추천</li>
                                <li class="size_list">제품 사이즈</li>
                            </ul>
                        </a>
                    </div>
     
                    <div class="pro_desc_box">
                        <div class="limited">
                            ${ITEM_LIST[i].state}
                            <span class="pro_name">${ITEM_LIST[i].title}</span>
                        </div>
                        <div class="p_price">₩ ${ITEM_LIST[i].price.toLocaleString()}</div>
                    </div>
                    
                </li>`
    
        
    }        

    let size_chk = document.getElementsByClassName('size_chk');
    let size_list_box = document.getElementsByClassName('size_list_box');
    
    for(let i=0; i<size_chk.length; i++) {
        size_chk[i].addEventListener('mouseenter',function(){
            this.nextElementSibling.classList.add('active')
            // size_list_box[i].classList.add('active')
        }) 
    }
    
    let pro_img_box = document.getElementsByClassName('pro_img_box');
    for(let i=0; i<pro_img_box.length; i++) {
        pro_img_box[i].addEventListener('mouseleave',function(){
            for(let j=0; j<size_list_box.length; j++) {
                size_list_box[j].classList.remove('active')
            }
        }) 
    }


    p_list_count = p_item_list.children.length;

    if(p_list_count >= ITEM_LIST.length) {
         document.getElementsByClassName('btn_showMore')[0].remove();
    }
    
}
put_item(10)


let pan = document.getElementsByClassName('pan')
let b_count = pan.length
let idx = 0
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



let btn_slide_L = document.getElementsByClassName('btn_slide_L')[0]
let btn_slide_R = document.getElementsByClassName('btn_slide_R')[0]
let box = document.getElementsByClassName('slide_p')
let c_count = box.length
let idex = 0
let btn_clicked = true

btn_slide_R.addEventListener('click', function(){
    // 방법1 - 버튼을 눌러도 동작 하거나 안하거나 선택할수 있게 하기
    if(btn_clicked) {
        btn_clicked = false;
    // 방법2 - 아예 이벤트를 못알아보게 하기
        // btn_slide_R.style.pointerEvents = "none"

        let posX = 0;

        let interval = setInterval(function(){
            // 현재 보고있는 판 - 내보내기
            box[idex % c_count].style.left = `${-1 * posX}%`;
            
            // 들어볼 판 - 우측에서 들어오기
            box[(idex+1)% c_count].style.left = `${100 - posX}%`
            
            posX+=1;
            if(posX > 100) {
                console.log("다 왔음")
                btn_clicked = true;
                // btn_slide_R.style.pointerEvents = "auto"
                clearInterval(interval)
                idex=(idex+1)% c_count; // 다음 들어올 방 잡기
            }
        }, 10)
    }
})


btn_slide_L.addEventListener('click', function(){
    // 방법1 - 버튼을 눌러도 동작 하거나 안하거나 선택할수 있게 하기
    if(btn_clicked) { 
        btn_clicked = false;
    // 방법2 - 아예 이벤트를 못알아보게 하기
        // btn_slide_R.style.pointerEvents = "none"

        let posX = 0;

        let interval = setInterval(function(){
            // 현재 보고있는 판 - 내보내기
            box[idex % c_count].style.left = `${posX}%`;
            
            // 들어볼 판 - 우측에서 들어오기
            box[(idex-1+c_count) % c_count].style.left = `${-1*(100 - posX)}%`
            
            posX+=1;
            if(posX > 100) {
                console.log("다 왔음")
                btn_clicked = true;
                // btn_slide_R.style.pointerEvents = "auto"
                clearInterval(interval)
                idex=(idex-1+c_count) % c_count; // 다음 들어올 방 잡기
            }
        }, 10)
    }
})



