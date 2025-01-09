$(function () {  	
	snb();	
	/* tabs(".depth4");
	tabs(".depth5");
	accordion(".accordion");
	dialogPop() //alert
	fileLoad(".file-input"); */

	//프로젝트 등록
	layerPopup('.btn-project-create')		

	//snb close
	listOpen('#snb .snb-close', '#snb', true)

	//mdi
	$('.mdi-tabs .ri-close-line').on('click', function(e){
		$(this).parents('li').remove();
		e.preventDefault();
	});
	$('.mdi-all-close').on('click', function(e){
		$('.mdi-tabs').find('li:not(.active)').remove();
		mdiTab.update();
	});
	var mdiTab = new Swiper(".mdi-area .swiper", { 
		slidesPerView: 'auto',
		loop: this.SwiperLength > 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	}) 	

	//드래그
	$('.draggable tbody').sortable();	
	
	//아이템 삭제
	$('.item.selected').append('<i class="ri-close-line"></i>')
	$('.filter .ri-close-line').on('click', function(e){
		$(this).parents('.selected').remove();
		e.preventDefault();
	});

	//상세검색 필터
	listOpen('.filter-open', '.filter', true)	
	listOpen('.item-add', '.filter-item', false)
	

	//리스트
	$('.sort').on('click', function(){
		if($(this).hasClass('desc')){
			$(this).removeClass('desc').addClass('asc');
		} else if($(this).hasClass('asc')){
			$(this).removeClass('asc');
		} else {
			$(this).toggleClass('desc');
		}			
	});	
	listOpen('.btn-draggable', '.row-btn-control', false)
	listOpen('.btn-empty', '[data-layer]', false)

	
	//팝업 콘텐츠 탭
	tabs(".depth4", '.popup-tab-cont');
	
	//투입일수
	layerPopup('.btn-mem-date')
	$html.on('click', '.opened-layer .popup-close', function(e) {	
        e.preventDefault();
        $(this).closest('.opened-layer').removeAttr('tabindex').fadeOut(100).removeClass(OL);
		$html.removeClass(ScrollNo);
		$clickSpot.focus().removeClass(AC).attr('aria-expanded', 'false');
    })


	/* //이메일 도메인 선택
	$('.domain-select').on('change', function(){
		var selDomain = $(this).val()
		$(this).prev('.domain-input').val(selDomain);
	})
	//평점신청시 선택활성화
	$('input[name="grade_yn"]').on('change', function(){
		$('[value="Y"]').is(':checked') ? $(this).parent().siblings('select').prop('disabled', false) : $(this).parent().siblings('select').prop('disabled', true);
	}) */
})


