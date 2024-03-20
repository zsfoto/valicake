<?php
/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         0.10.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 * @var \App\View\AppView $this
 */
$cakeDescription = 'ValiCake';
?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="description" content="Vali is a responsive and free admin theme built with Bootstrap 5, SASS and PUG.js. It's fully customizable and modular.">
    <!-- Twitter meta-->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:site" content="@pratikborsadiya">
    <meta property="twitter:creator" content="@pratikborsadiya">
    <!-- Open Graph Meta-->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="ValiCake">
    <meta property="og:title" content="ValiCake - Free Bootstrap 5 admin theme for CakePhp by Jeff Shoemaker">
    <meta property="og:url" content="http://pratikborsadiya.in/blog/vali-admin">
    <meta property="og:image" content="http://pratikborsadiya.in/blog/vali-admin/hero-social.png">
    <meta property="og:description" content="Vali is a responsive and free admin theme built with Bootstrap 5, SASS and PUG.js. It's fully customizable and modular.">
    <title><?= $cakeDescription ?>: <?= $this->fetch('title') ?></title>	
	<?= $this->Html->charset() ?>
	
	<?= $this->Html->meta('icon') ?>
	
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
    <!-- Main CSS--><?= $this->Html->css([
		'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',	// Bootstrap icons
		'ValiCake./font-awesome/css/font-awesome.min',									// FontAwesome
		'ValiCake./assets/vali-admin-master/docs/css/main',								// https://github.com/pratikborsadiya/vali-admin 
		'ValiCake./assets/simple-notify-master/dist/simple-notify',						// ToastMessage
		'ValiCake./assets/sweetalert2/dist/sweetalert2.min',							// SeetAlert
		'ValiCake./css/valicake',														// This FrameWork Main css
	]) ?>
	<?= $this->fetch('css') ?>
	
	<?php //= $this->Html->css('ValiCake./css/valicake'); ?>
	
  </head>
  <body class="app sidebar-mini">

    <!-- Navbar-->
    <header class="app-header"><a class="app-header__logo" href="index.html">ValiCake Admin</a>
		<!-- Sidebar toggle button--><a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
		<!-- Navbar Right Menu-->
		<ul class="app-nav">
			<?= $this->element('ValiCake.app_search') ?>
			<?= $this->element('ValiCake.notification_menu') ?>
			<?= $this->element('ValiCake.user_menu') ?>
		</ul>
    </header>

    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">	
		<?= $this->element('ValiCake.app_sidebar_user') ?>
		<?= $this->element('ValiCake.app_menu') ?>
    </aside>
    <main class="app-content">
		<?= $this->element('ValiCake.app_title') ?>
		<?= $this->fetch('content') ?>

    </main>
	
    <!-- Essential javascripts for application to work--><?= $this->Html->script([
		'ValiCake./js/jquery-3.7.0.min',									// jQuery
		'ValiCake./js/bootstrap.min',										// Bootstrap
		'ValiCake./assets/vali-admin-master/docs/js/main',				 	// https://github.com/pratikborsadiya/vali-admin
		'ValiCake./assets/simple-notify-master/dist/simple-notify.min',		// ToastMessage
		'ValiCake./assets/sweetalert2/dist/sweetalert2.all.min',			// SweetAlert
		'ValiCake./js/valicake',											// Main .js for this FrameWork
	]) ?>
	
	<?= $this->fetch('scriptBottom'); ?>
	
    <!-- Page specific javascripts-->
	<?= $this->fetch('javaScriptBottom'); ?>

<?php if (!empty($this->getRequest()->getSession()->read('Flash'))) { ?>
	<script>
<?= $this->element('ValiCake.script_flash') ?>
<?= $this->Flash->render() ?>
	</script>
<?php } ?>
	
  </body>
</html>