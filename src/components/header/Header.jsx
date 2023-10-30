import React from 'react'
import styles from './Header.css'
import locationIcon from '../../icons/location.svg'
import phoneIcon from '../../icons/phone.svg'
import searchIcon from '../../icons/search.svg'
import facebookIcon from '../../icons/facebook.svg'
import companyLogo from '../../icons/companyLogo.svg'
import languageRussianIcon from '../../icons/languageRussian.svg'

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <div>
            <a
              className="headerLink"
              href="https://www.google.com/maps/place/3+%D0%B4%D0%BE%D0%BC/@41.2695404,69.1704763,16z/data=!4m10!1m2!2m1!1z0LMu0KLQsNGI0LrQtdC90YIsINCn0LjQu9Cw0L3Qt9Cw0YAgMTAg0LrQstCw0YDRgtCw0LssINC00L7QvCAzLzE!3m6!1s0x38ae8994551362bd:0xd1a416b0fec47967!8m2!3d41.2695402!4d69.1776839!15sCkHQsy7QotCw0YjQutC10L3Rgiwg0KfQuNC70LDQvdC30LDRgCAxMCDQutCy0LDRgNGC0LDQuywg0LTQvtC8IDMvMZIBEmFwYXJ0bWVudF9idWlsZGluZ-ABAA!16s%2Fg%2F11vbdt0lw9?entry=ttu"
            >
              <span className="headerIcon">
                <img src={locationIcon} alt="" />
              </span>

              <span className="icon-text">
                г.Ташкент, Чиланзар10 квартал, дом 3/1
              </span>
            </a>
            <a className="headerLink" href="#">
              <span className="headerIcon">
                <img src={phoneIcon} alt="" />
              </span>

              <span className="icon-text ">
                +998 71 276-62-53 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; +998 71
                276-62-54
              </span>
            </a>
          </div>
        </div>
        <a href="#default" className="logo">
          <img src={companyLogo} alt="" />
        </a>
        <div className="header-right">
          <a className="headerLink" href="#">
            <span className="headerIcon searchIcon">
              <img src={searchIcon} alt="" />
            </span>
          </a>
          <a className="headerLink" href="#">
            <span className="headerIcon facebook">
              <img src={facebookIcon} alt="" />
              <span className="facebookText">Мы на Facebook</span>
            </span>
          </a>
          <select className="headerSelect" name="languages" id="languages">
            <img src={languageRussianIcon} alt="" />
            <option value="russian">
              <a className="headerLink" href="#">
                <p> Русский</p>
              </a>
            </option>
            <option value="english">
              <a className="headerLink" href="#">
                <p> English</p>
              </a>
            </option>
            <option value="uzbek">
              <a className="headerLink" href="#">
                <p> Uzbek</p>
              </a>
            </option>
          </select>
        </div>
      </div>
      <div class="topnav">
        <a href="#news">МАГАЗИН </a>
        <a href="#news"> О КОМПАНИИ </a>
        <a href="#news">ПРОДУКЦИЯ</a>
        <a href="#news">УСЛУГИ</a>
        <a href="#contact">АКЦИИ И НОВОСТИ</a>
        <a href="#about">ОБРАТНАЯ СВЯЗЬ</a>
      </div>
    </div>
  )
}

export default Header