<?php
use Cake\Core\Configure;

$paginatorTemplates = [
	'nextActive' => '<li class="page-item"><a class="page-link" href="{{url}}" title="' . __d('jeff_admin5', 'Next page') . '">{{text}}</a></li>',
	'nextDisabled' => '<li class="page-item disabled"><span class="page-link">{{text}}</span></li>',
	'prevActive' => '<li class="page-item prev"><a rel="prev" class="page-link" href="{{url}}">{{text}}</a></li>',
	'prevDisabled' => '<li class="page-item disabled"><span class="page-link">{{text}}</span></li>',
	'first' => '<li class="page-item first"><a href="{{url}}" class="page-link">{{text}}</a></li>',
	'last' => '<li class="page-item"><a class="page-link" href="{{url}}">{{text}}</a></li>',
	'number' => '<li class="page-item"><a class="page-link" href="{{url}}">{{text}}</a></li>',
	'current' => '<li class="page-item active" aria-current="page"><span class="page-link">{{text}}</span></li>',
	'ellipsis' => '<li class="page-item ellipsis"><span class="page-link"><i class="fa fa-ellipsis-h" title="' . __d('jeff_admin5', 'Lots of page') . '"></i></span></li>',
	//'counterRange' => '{{start}} - {{end}} of {{count}}',
	//'counterPages' => '{{page}} of {{pages}}',
	//'sort' => '<a href="{{url}}">{{text}}</a>',
	//'sortAsc' => '<a class="asc" href="{{url}}">{{text}}</a>',
	//'sortDesc' => '<a class="desc" href="{{url}}">{{text}}</a>',
	//'sortAscLocked' => '<a class="asc locked" href="{{url}}">{{text}}</a>',
	//'sortDescLocked' => '<a class="desc locked" href="{{url}}">{{text}}</a>',
];

$this->Paginator->setTemplates($paginatorTemplates);
?>

<?php if($this->Paginator->numbers()) { ?>
									<nav aria-label="Page navigation">
									  <ul class="pagination justify-content-end" style="margin-top: 4px; margin-bottom: 0;">
<?php
											if($this->Paginator->hasPrev()){
												echo $this->Paginator->first('<i class="fa fa-angle-double-left" title="' . __d('jeff_admin5', 'First page') . '"></i>', ['escape' => false]);
											}
											//if($this->Paginator->hasPrev()){
												echo $this->Paginator->prev('<i class="fa fa-angle-left" title="' . __d('jeff_admin5', 'Previous page') . '"></i>', ['escape' => false]);
											//}
											//echo $this->Paginator->numbers(['modulus' => 10]);	//Aktívon kívüli oldalak száma
											echo $this->Paginator->numbers(    
												[
													//'ellipsis' => '.-.-.',
													//'ellipsis' => '<i class="fa fa-ellipsis-h" title="' . __d('jeff_admin5', 'Lots of page') . '"></i>',
													//'separator' => ' ',
													'modulus' => 7,
													'first' => 1,
													'last' => 1
												]
											);
											//if($this->Paginator->hasNext()){
												echo $this->Paginator->next('<i class="fa fa-angle-right"></i>',['escape' => false]);
											//}
											echo $this->Paginator->last('<i class="fa fa-angle-double-right" title="' . __d('jeff_admin5', 'Last page') . '"></i>', ['escape' => false]);
?>
									  </ul>
									</nav>


<?php //<i class="icon-angle-right" title="' . __d('jeff_admin5', 'Next page') . '"></i>  ?>

<?php } ?>
