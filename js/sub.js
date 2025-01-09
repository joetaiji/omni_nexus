$(function () {  	
	snb();
	tabs(".depth4", '.popup-tab-cont');
	/* tabs(".depth4");
	tabs(".depth5");
	accordion(".accordion");
	dialogPop() //alert
	fileLoad(".file-input"); */
	layerPopup('.btn-project-create')		//프로젝트 등록

	//snb close
	listOpen('#snb .snb-close', '#snb', true)

	/* //통합검색-고급검색
	tabs(".total-search-cont .tabs");
	listOpen('.ico-sch1', '.sch-etc', true) */

	//mdi
	$('.mdi-tabs .ri-close-line').on('click', function(e){
		$(this).parents('li').remove();
		e.preventDefault();
	});
	$('.mdi-all-close').on('click', function(e){
		$('.mdi-tabs').find('li:not(.active)').remove();
		mdiTab.update();
	});

	$('.sortable tbody').sortable();
	

	var mdiTab = new Swiper(".mdi-area .swiper", { 
		slidesPerView: 'auto',
		loop: this.SwiperLength > 1,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	}) 	
	
	//필터 닫기버튼
	$('.item.selected').append('<i class="ri-close-line"></i>')
	$('.filter .ri-close-line').on('click', function(e){
		$(this).parents('.selected').remove();
		e.preventDefault();
	});

	//상세검색열기
	listOpen('.filter-open', '.filter', true)

	//필터
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


