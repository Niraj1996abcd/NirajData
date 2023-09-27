import React from "react";

export default function Footer() {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <p>
              Copyright{" "}
              <script>document.write(new Date().getFullYear())</script> &copy;{" "}
              <a href="http://www.devcrud.com" target="_blank">
                DevCRUD
              </a>
            </p>
          </div>
          <div class="col-sm-6">
            <div class="socials">
              <a class="social-item" href="javascript:void(0)">
                <i class="ti-facebook"></i>
              </a>
              <a class="social-item" href="javascript:void(0)">
                <i class="ti-google"></i>
              </a>
              <a class="social-item" href="javascript:void(0)">
                <i class="ti-github"></i>
              </a>
              <a class="social-item" href="javascript:void(0)">
                <i class="ti-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
