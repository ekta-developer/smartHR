import React from 'react';

const CardSetting = () => {
  return (
    <>
     
<div className="settings-icon">
<span data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas"><i className="las la-cog"></i></span>
</div>
<div className="offcanvas offcanvas-end border-0 " tabindex="-1" id="theme-settings-offcanvas">
<div className="sidebar-headerset">
<div className="sidebar-headersets">
<h2>Customizer</h2>
<h3>Customize your overview Page layout</h3>
</div>
<div className="sidebar-headerclose">
<a data-bs-dismiss="offcanvas" aria-label="Close"><img src="assets/img/close.png" alt="Close Icon"/></a>
</div>
</div>
<div className="offcanvas-body p-0">
<div data-simplebar className="h-100">
<div className="settings-mains">
<div className="layout-head">
<h5>Layout</h5>
<h6>Choose your layout</h6>
</div>
<div className="row">
<div className="col-4">
<div className="form-check card-radio p-0">
<input id="customizer-layout01" name="data-layout" type="radio" value="vertical" className="form-check-input"/>
<label className="form-check-label avatar-md w-100" for="customizer-layout01">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Vertical</h5>
</div>
<div className="col-4">
<div className="form-check card-radio p-0">
<input id="customizer-layout02" name="data-layout" type="radio" value="horizontal" className="form-check-input"/>
<label className="form-check-label  avatar-md w-100" for="customizer-layout02">
<img src="assets/img/horizontal.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Horizontal</h5>
</div>
<div className="col-4">
<div className="form-check card-radio p-0">
<input id="customizer-layout03" name="data-layout" type="radio" value="twocolumn" className="form-check-input"/>
<label className="form-check-label  avatar-md w-100" for="customizer-layout03">
<img src="assets/img/two-col.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Two Column</h5>
</div>
</div>
<div className="layout-head pt-3">
<h5>Color Scheme</h5>
<h6>Choose Light or Dark Scheme.</h6>
</div>
<div className="colorscheme-cardradio">
<div className="row">
<div className="col-4">
<div className="form-check card-radio p-0">
<input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-orange" value="orange"/>
<label className="form-check-label  avatar-md w-100 " for="layout-mode-orange">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Orange</h5>
</div>
<div className="col-4">
<div className="form-check card-radio p-0">
<input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-light" value="light"/>
<label className="form-check-label  avatar-md w-100" for="layout-mode-light">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Light</h5>
</div>
<div className="col-4">
<div className="form-check card-radio dark  p-0 ">
<input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-dark" value="dark"/>
<label className="form-check-label avatar-md w-100 " for="layout-mode-dark">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Dark</h5>
</div>
<div className="col-4">
<div className="form-check card-radio blue  p-0 ">
<input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-blue" value="blue"/>
<label className="form-check-label  avatar-md w-100" for="layout-mode-blue">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Blue</h5>
</div>
<div className="col-4">
<div className="form-check card-radio maroon p-0">
<input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-maroon" value="maroon"/>
<label className="form-check-label  avatar-md w-100 " for="layout-mode-maroon">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Maroon</h5>
</div>
<div className="col-4">
<div className="form-check card-radio purple p-0">
<input className="form-check-input" type="radio" name="data-layout-mode" id="layout-mode-purple" value="purple"/>
<label className="form-check-label  avatar-md w-100 " for="layout-mode-purple">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Purple</h5>
</div>
</div>
</div>
<div id="layout-width">
<div className="layout-head pt-3">
<h5>Layout Width</h5>
<h6>Choose Fluid or Boxed layout.</h6>
</div>
<div className="row">
<div className="col-4">
<div className="form-check card-radio p-0">
<input className="form-check-input" type="radio" name="data-layout-width" id="layout-width-fluid" value="fluid"/>
<label className="form-check-label avatar-md w-100" for="layout-width-fluid">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Fluid</h5>
</div>
<div className="col-4">
<div className="form-check card-radio p-0 ">
<input className="form-check-input" type="radio" name="data-layout-width" id="layout-width-boxed" value="boxed"/>
<label className="form-check-label avatar-md w-100 px-2" for="layout-width-boxed">
<img src="assets/img/boxed.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Boxed</h5>
</div>
</div>
</div>
<div id="layout-position">
<div className="layout-head pt-3">
<h5>Layout Position</h5>
<h6>Choose Fixed or Scrollable Layout Position.</h6>
</div>
<div className="btn-group bor-rad-50 overflow-hidden radio" role="group">
<input type="radio" className="btn-check" name="data-layout-position" id="layout-position-fixed" value="fixed"/>
<label className="btn btn-light w-sm" for="layout-position-fixed">Fixed</label>
<input type="radio" className="btn-check" name="data-layout-position" id="layout-position-scrollable" value="scrollable"/>
<label className="btn btn-light w-sm ms-0" for="layout-position-scrollable">Scrollable</label>
</div>
</div>
<div className="layout-head pt-3">
<h5>Topbar Color</h5>
<h6>Choose Light or Dark Topbar Color.</h6>
</div>
<div className="row">
<div className="col-4">
<div className="form-check card-radio  p-0">
<input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-light" value="light"/>
<label className="form-check-label avatar-md w-100" for="topbar-color-light">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Light</h5>
</div>
<div className="col-4">
<div className="form-check card-radio p-0">
<input className="form-check-input" type="radio" name="data-topbar" id="topbar-color-dark" value="dark"/>
<label className="form-check-label  avatar-md w-100" for="topbar-color-dark">
<img src="assets/img/dark.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Dark</h5>
</div>
</div>
<div id="sidebar-size">
<div className="layout-head pt-3">
<h5>Sidebar Size</h5>
<h6>Choose a size of Sidebar.</h6>
</div>
<div className="row">
<div className="col-4">
<div className="form-check sidebar-setting card-radio  p-0 ">
<input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-default" value="lg"/>
<label className="form-check-label avatar-md w-100" for="sidebar-size-default">
<img src="assets/img/vertical.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Default</h5>
</div>
<div className="col-4">
<div className="form-check sidebar-setting card-radio p-0">
<input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-compact" value="md"/>
<label className="form-check-label  avatar-md w-100" for="sidebar-size-compact">
<img src="assets/img/compact.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Compact</h5>
</div>
<div className="col-4">
<div className="form-check sidebar-setting card-radio p-0 ">
<input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-small-hover" value="sm-hover"/>
<label className="form-check-label avatar-md w-100" for="sidebar-size-small-hover">
<img src="assets/img/small-hover.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Small Hover View</h5>
</div>
</div>
</div>
<div id="sidebar-view">
<div className="layout-head pt-3">
<h5>Sidebar View</h5>
<h6>Choose Default or Detached Sidebar view.</h6>
</div>
<div className="row">
<div className="col-4">
<div className="form-check sidebar-setting card-radio  p-0">
<input className="form-check-input" type="radio" name="data-layout-style" id="sidebar-view-default" value="default"/>
<label className="form-check-label avatar-md w-100" for="sidebar-view-default">
<img src="assets/img/compact.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Default</h5>
</div>
<div className="col-4">
<div className="form-check sidebar-setting card-radio p-0">
<input className="form-check-input" type="radio" name="data-layout-style" id="sidebar-view-detached" value="detached"/>
<label className="form-check-label  avatar-md w-100" for="sidebar-view-detached">
<img src="assets/img/detached.png" alt="Layout Image"/>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Detached</h5>
</div>
</div>
</div>
<div id="sidebar-color">
<div className="layout-head pt-3">
<h5>Sidebar Color</h5>
<h6>Choose a color of Sidebar.</h6>
</div>
<div className="row">
<div className="col-4">
<div className="form-check sidebar-setting card-radio p-0" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
<input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-light" value="light"/>
<label className="form-check-label  avatar-md w-100" for="sidebar-color-light">
<span className="bg-light bg-sidebarcolor"></span>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Light</h5>
</div>
<div className="col-4">
<div className="form-check sidebar-setting card-radio p-0" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
<input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-dark" value="dark"/>
<label className="form-check-label  avatar-md w-100" for="sidebar-color-dark">
<span className="bg-darks bg-sidebarcolor"></span>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Dark</h5>
</div>
<div className="col-4">
<div className="form-check sidebar-setting card-radio p-0">
<input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient" value="gradient"/>
<label className="form-check-label avatar-md w-100" for="sidebar-color-gradient">
<span className="bg-gradients bg-sidebarcolor"></span>
</label>
</div>
<h5 className="fs-13 text-center mt-2">Gradient</h5>
</div>
<div className="col-4 d-none">
<button className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient" aria-expanded="false" aria-controls="collapseBgGradient">
<span className="d-flex gap-1 h-100">
<span className="flex-shrink-0">
<span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
<span className="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
<span className="d-block p-1 px-2 pb-0 bg-soft-light"></span>
</span>
</span>
<span className="flex-grow-1">
<span className="d-flex h-100 flex-column">
<span className="bg-light d-block p-1"></span>
<span className="bg-light d-block p-1 mt-auto"></span>
</span>
</span>
</span>
</button>
<h5 className="fs-13 text-center mt-2">Gradient</h5>
</div>
</div>
<div className="collapse d-none" id="collapseBgGradient">
<div className="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded">
<div className="form-check sidebar-setting card-radio">
<input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-1" value="gradient"/>
<label className="form-check-label p-0 avatar-xs rounded-circle" for="sidebar-color-gradient">
<span className="avatar-title rounded-circle bg-vertical-gradient"></span>
</label>
</div>
<div className="form-check sidebar-setting card-radio">
<input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-2" value="gradient-2"/>
<label className="form-check-label p-0 avatar-xs rounded-circle" for="sidebar-color-gradient-2">
<span className="avatar-title rounded-circle bg-vertical-gradient-2"></span>
</label>
</div>
<div className="form-check sidebar-setting card-radio">
<input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-3" value="gradient-3"/>
<label className="form-check-label p-0 avatar-xs rounded-circle" for="sidebar-color-gradient-3">
<span className="avatar-title rounded-circle bg-vertical-gradient-3"></span>
</label>
</div>
<div className="form-check sidebar-setting card-radio">
<input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-gradient-4" value="gradient-4"/>
<label className="form-check-label p-0 avatar-xs rounded-circle" for="sidebar-color-gradient-4">
<span className="avatar-title rounded-circle bg-vertical-gradient-4"></span>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="offcanvas-footer border-top p-3 text-center">
<div className="row">
<div className="col-6">
<button type="button" className="btn btn-light w-100 bor-rad-50" id="reset-layout">Reset</button>
</div>
<div className="col-6">
<a href="https://themeforest.net/item/smarthr-bootstrap-admin-panel-template/21153150" target="_blank" className="btn btn-primary w-100 bor-rad-50">Buy Now</a>
</div>
</div>
</div>
</div>
  </>
  )
}

export default CardSetting;