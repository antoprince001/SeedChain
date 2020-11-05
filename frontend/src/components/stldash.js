import react from 'react';


export default function STLContent()
{
    return(

        <div className="wrapper">
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
    </ul>
    {/* SEARCH FORM */}
    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
    {/* Right navbar links */}
  </nav>
  {/* /.navbar */}
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light"> STL Dashboard </span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block"> STL </a>
        </div>
      </div>
      {/* Sidebar Menu */}
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>

  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Info boxes */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
              <div className="info-box-content">
                <span className="info-box-text"> Verified </span>
                <span className="info-box-number">
                  10
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-down" /></span>
              <div className="info-box-content">
                <span className="info-box-text"> Rejected </span>
                <span className="info-box-number"> 12</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          {/* fix for small devices only */}
          <div className="clearfix hidden-md-up" />
          <div className="col-12 col-sm-6 col-md-4">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
              <div className="info-box-content">
                <span className="info-box-text"> Validated </span>
                <span className="info-box-number"> 70</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          {/* /.col */}
        </div>
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <div className="col-md-8">
            {/* MAP & BOX PANE */}
            {/* TABLE: LATEST ORDERS */}
            <div className="card">
              <div className="card-header border-transparent">
                <h3 className="card-title"> View the seeds </h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th> Lot Number </th>
                        <th> Crop Variety </th>
                        <th> Sample Passed </th>
                        <th> Test Date </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href> APR19-33-028-117(2) </a></td>
                        <td> Paddy </td>
                        <td><span className="badge badge-success"> Verified </span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}> 30-10-2020 </div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href> MAR19-33-038-117(3) </a></td>
                        <td> Paddy </td>
                        <td><span className="badge badge-danger"> Rejected </span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}>
                               30-10-2020
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href> FEB19-33-028-117(4) </a></td>
                        <td> Paddy </td>
                        <td><span className="badge badge-success"> Verified </span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}> 30-10-2020 </div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href> JAN19-33-028-117(2) </a></td>
                        <td> Paddy </td>
                        <td><span className="badge badge-info"> Validated </span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}> 12-10-2020 </div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href> APR19-33-028-117(2) </a></td>
                        <td> Paddy </td>
                        <td><span className="badge badge-success"> Verified </span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}> 30-10-2020 </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.table-responsive */}
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
          {/* <div class="col-md-4">
       Info Boxes Style 2
      <div class="info-box mb-3 bg-warning">
        <span class="info-box-icon"><i class="fas fa-tag"></i></span>

        <div class="info-box-content">
          <span class="info-box-text">Inventory</span>
          <span class="info-box-number">5,200</span>
        </div>

      </div>
      <div class="info-box mb-3 bg-success">
        <span class="info-box-icon"><i class="far fa-heart"></i></span>

        <div class="info-box-content">
          <span class="info-box-text">Mentions</span>
          <span class="info-box-number">92,050</span>
        </div>
      </div>
      <div class="info-box mb-3 bg-danger">
        <span class="info-box-icon"><i class="fas fa-cloud-download-alt"></i></span>

        <div class="info-box-content">
          <span class="info-box-text">Downloads</span>
          <span class="info-box-number">114,381</span>
        </div>
      </div>
      <div class="info-box mb-3 bg-info">
        <span class="info-box-icon"><i class="far fa-comment"></i></span>

        <div class="info-box-content">
          <span class="info-box-text">Direct Messages</span>
          <span class="info-box-number">163,921</span>
        </div>
      </div>


     /.col
  </div> */}

        </div>
      </div></section>
  </div>
  <aside className="control-sidebar control-sidebar-dark">
  </aside>
</div>
    )

}
