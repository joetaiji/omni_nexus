$(function () { 	

	/* ==================================================================================
	필터 아이템
	================================================================================== */
	//상세검색 필터
	listOpen('.btn-filter-open, .item-more', '.filter', true)	
	listOpen('.item-add', '.filter-item', false)

	//아이템 선택 및 저장	
	$('.filter .item-group .item').on('click', function(e){			
		const $na = $(this);
		if(!$na.hasClass('selected')){
			$na.addClass('selected').parents('.filter-item').find('.item-add-group').prepend($na.clone().append('<i class="ri-close-line"></i>'));
		}		
	})
	
	$('.input-date1, .input-date2').on('change', function() {
		var $itemGroup = $(this).closest('.item'); 
        var date1 = $('.input-date1').val();
        var date2 = $('.input-date2').val();
        
        date1 && date2 ? $itemGroup.addClass('selected') : $itemGroup.removeClass('selected'); 
	})
	$('.input-text1, .input-text2').on('change', function() {
		var $itemGroup = $(this).closest('.item'); 
        var text1 = $('.input-text1').val();
        var text2 = $('.input-text2').val();
        
        text1 && text2 ? $itemGroup.addClass('selected') : $itemGroup.removeClass('selected'); 
	})
	
	//아이템 삭제
	$('.filter').on('click', '.ri-close-line', function(e){
		const item = $(this).closest('.selected').data('item');
		const dataItem = '[data-item='+ item + ']'
		$('.item-cont').find(dataItem).remove();		
		$(dataItem).removeClass('selected');		
		e.stopPropagation();
	});
	$('.form-item .ri-close-line').on('click', function(){
		$(this).parent().removeClass('selected').find('.form-control').val('');
	})
	
	//필터선택결과버튼
	
	$('.btn-filter-result').on('click', function(e){
		$('.filter-setting').prepend($('.filter-item>.item-cont .selected').clone());
		$('.filter').removeClass(AC).addClass('setting');
		let totalWidth = 0;
		
		$('.filter-setting .item').each(function(){	
			totalWidth += parseInt($(this).outerWidth());
			if(totalWidth > $('.filter-setting').width() - 300){
				$(this).after('<span class="item item-more"><i class="ri-add-fill"></i>13<i class="ri-arrow-down-s-line"></i></span>');
				totalWidth = $(this).outerWidth();
				return false;
			}	
		})
		$('.filter').find('.item-add-group .selected').remove();
	});
	//아이템 더보기버튼
	$('.btn-item-more').on('click', function(e){

	})
	//초기화버튼
	$('.btn-filter-reset').on('click', function(e){
		$('.filter').removeClass('setting').addClass(AC).find('.item-add-group .selected').remove();
		$('.filter').find('.item-cont .form-control').val('');
		$('.filter-item>.item-cont .item').removeClass('selected');
		$('.filter-setting').empty();
	});
	
	/* ==================================================================================
	테이블 리스트
	================================================================================== */
	//줄삭제
	$('.row-btn-control .btn-delete').on('click', function(){
		$(this).closest('tr').remove();
	});
	//새로 만들기 - 줄 추가
	/* $('.btn-row-add').on('click', function(){
		const addRow = $(this).prev('.table').find('tr:last').clone();
		addRow.find('td:not(.row-btn-control)').html('<button class="btn-empty">비어있음</button>');
		$(this).prev('.table').find('>table>tbody').append(addRow);
	}) */	
	//정렬
	$('.sortable thead th:not(:first-child)').append('<button class="btn-sort"><i class="ri-arrow-up-s-fill"></i><i class="ri-arrow-down-s-fill"></i></button>');
	$('.btn-sort').on('click', function(){
		if($(this).hasClass('desc')){
			$(this).removeClass('desc').addClass('asc');
		} else if($(this).hasClass('asc')){
			$(this).removeClass('asc');
		} else {
			$(this).toggleClass('desc');
		}			
	});	
	listOpen('.btn-draggable', '.row-btn-control', false)
	$('[data-layer]').on('click', function(e){
		const $na = $(this);
		const offset = $na.offset();

		const $layer = $('.' + $na.data('layer') + '-layer');
		$layer.fadeIn(300).css({
			'left': offset.left + 'px',
			'top': offset.top + 53 + 'px'
		});

		$html.on('mousedown', function(e){	
			if(!$(e.target).closest($na).length && !$(e.target).closest('.item-layer').length){
				$layer.fadeOut(100);
			}
		})	
	});
	
	//listOpen('.table [data-layer]', '[data-layer]', false)

	//프로젝트 등록
	layerPopup('.btn-project-create')
	
	/* ==================================================================================
	팝업
	================================================================================== */
	//팝업내 탭메뉴
	tabs(".depth4", '.popup-tab-cont');	
	
	//팝업사이드 열기 - 투입일수, 내부단가
	$('.btn-mem-date, .btn-mem-inner-price').on('click', function(e){
		$('.popup-side').addClass(AC).find('.popup-side-cont').hide();
		$('#' + $(this).data('id')).attr('tabindex', 0).fadeIn(300);
	})
	$('.popup-back').on('click', function(e) {	
        $(this).closest('.popup-side').removeClass(AC);
    })
	$(".mem-date-count td").on('click', function(e) {	
		let dayUnit = parseFloat($(this).find('strong').text());
		if (dayUnit >= 1) {
			dayUnit = 0;
		} else {
			dayUnit += 0.25;
		}
		let timeAddClass = dayUnit * 100
		$(this).removeClass().addClass('time-'+timeAddClass).find('strong').text(dayUnit);
	})
	//내부노임단가 
	dialogPop();

})


