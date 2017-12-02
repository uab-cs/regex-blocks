import {Component, ViewEncapsulation, AfterViewInit, OnInit} from '@angular/core';
import {Router} from "@angular/router";

declare let $: any;

@Component({
    selector: 'app-master',
    templateUrl: './master.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MasterComponent implements AfterViewInit {

    md_hamburger_icon;
    sidebar_account_settings;
    sidebar_menu;

    sidebar_links = [
        {
            name: "Admin Book",
            icon: "shopping_cart",
            route: 'booking'
        }
    ];

    constructor(
        private router: Router
    ) { }

    handleLogout(){}

    toggleSidebar(){
        document.body.classList.toggle('background--blur');
        this.md_hamburger_icon
            .parentNode['nextElementSibling']
            .classList
            .toggle('menu--on');

        let child = this.md_hamburger_icon.childNodes[1]['classList'];

        if (child.contains('material-design-hamburger__icon--to-arrow')) {
            child.remove('material-design-hamburger__icon--to-arrow');
            child.add('material-design-hamburger__icon--from-arrow');
        } else {
            child.remove('material-design-hamburger__icon--from-arrow');
            child.add('material-design-hamburger__icon--to-arrow');
        }

        $('#slide-out').toggle();
        $('.mn-inner').toggleClass('hidden-fixed-sidebar');
        $('.mn-content').toggleClass('fixed-sidebar-on-hidden');
        $(document).trigger('fixedSidebarClick');
    }

    toggleAccountSettings(){
        if (!this.sidebar_account_settings.hasClass('show')) {
            this.sidebar_account_settings.fadeIn(300);
            this.sidebar_menu.fadeOut(0);
            this.sidebar_account_settings.addClass('show');
        } else {
            this.sidebar_account_settings.fadeOut(0);
            this.sidebar_menu.fadeIn(300);
            this.sidebar_account_settings.removeClass('show');
        }
    }

    ngAfterViewInit(){
        this.md_hamburger_icon = document.querySelector('.material-design-hamburger__icon');
        this.sidebar_account_settings = $('.sidebar-account-settings');
        this.sidebar_menu = $('.sidebar-menu');
        $(".fixed-sidebar .navigation-toggle a").removeClass('button-collapse');
        $(".fixed-sidebar .navigation-toggle a").addClass('reverse-icon');
        if (($(window).width() < 993) && (!$('.mn-content').hasClass('fixed-sidebar-on-hidden'))) {
            $(".fixed-sidebar .navigation-toggle a").click();
            $('.fixed-sidebar .navigation-toggle a span').addClass('material-design-hamburger__icon--to-arrow');
        }
        $('.sidebar-account-settings:not(.show)').fadeOut(0);
        // Right Dropdown
        $('.dropdown-right').dropdown({
            alignment: 'right' // Displays dropdown with edge aligned to the left of button
        });

        // Initialize collapse button
        $('.button-collapse:not(.right-sidebar-button)').sideNav();
        $('.button-collapse.right-sidebar-button').sideNav({
            edge: 'right'
        });
        $('.chat-button').sideNav({
            edge: 'right'
        });
        $('.chat-message-link').sideNav({
            menuWidth: 320,
            edge: 'right'
        });
        $('.chat-message').click(function () {
            $('.chat-message-link').click();
        });

        $('.collapsible').collapsible();
        this.toggleSidebar();
    }

}
