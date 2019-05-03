import $ from "jquery";
import Modal from "./modules/Modal";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

const mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");

const stickyHeader = new StickyHeader();
const modal = new Modal();
