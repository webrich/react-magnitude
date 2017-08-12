import React from "react";
import Home from "./components/Home";
import GridExamples from "./components/GridExamples";
import CollectionExamples from "./components/CollectionExamples";
import BadgeExamples from "./components/BadgeExamples";
import TypographyExamples from "./components/TypographyExamples";
import ButtonExamples from "./components/ButtonExamples";
import NavbarExamples from "./components/NavbarExamples";
import BreadcrumbExamples from "./components/BreadcrumbExamples";
import PreloaderExamples from "./components/PreloaderExamples";
import CardExamples from "./components/CardExamples";
import TabExamples from "./components/TabExamples";
import CollapsibleExamples from "./components/CollapsibleExamples";
import TooltipExamples from "./components/TooltipExamples";
import CarouselExamples from "./components/CarouselExamples";
import InputExamples from "./components/InputExamples";
import TextareaExamples from "./components/TextareaExamples";
import RadioExamples from "./components/RadioExamples";
import CheckboxExamples from "./components/CheckboxExamples";
import SwitchExamples from "./components/SwitchExamples";
import FileExamples from "./components/FileExamples";
import DatepickerExamples from "./components/DatepickerExamples";
import AutocompleteExamples from "./components/AutocompleteExamples";
import SelectExamples from "./components/SelectExamples";
import DropdownExamples from "./components/DropdownExamples";
import ModalExamples from "./components/ModalExamples";
import TagsExamples from "./components/TagsExamples";
import MediaExamples from "./components/MediaExamples";
import ParallaxExamples from "./components/ParallaxExamples";

export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        title: "JavaScript",
        components: [
            {
                title: "Carousel",
                path: "/carousels",
                component: CarouselExamples
            },
            {
                title: "Collapsibles",
                path: "/collapsible",
                component: CollapsibleExamples
            },
            {
                title: "Tooltips",
                path: "/tooltips",
                component: TooltipExamples
            },
            {
                title: "Tabs",
                path: "/tabs",
                component: TabExamples
            },
            {
                title: "Dropdown",
                path: "/dropdown",
                component: DropdownExamples
            },
            {
                title: "Modals",
                path: "/modals",
                component: ModalExamples
            },
            {
                title: "Media",
                path: "/media",
                component: MediaExamples
            },
            {
                title: "Parallax",
                path: "/parallax",
                component: ParallaxExamples
            }
        ]
    },
    {
        title: "Components",
        components: [
            {
                title: "Badges",
                path: "/badges",
                component: BadgeExamples
            },
            {
                title: "Buttons",
                path: "/buttons",
                component: ButtonExamples
            },
            {
                title: "Breadcrumbs",
                path: "/breadcrumbs",
                component: BreadcrumbExamples
            },
            {
                title: "Cards",
                path: "/cards",
                component: CardExamples
            },
            {
                title: "Collection",
                path: "/collection",
                component: CollectionExamples
            },
            {
                title: "Navbar",
                path: "/navbar",
                component: NavbarExamples
            },
            {
                title: "Preloader",
                path: "/preloader",
                component: PreloaderExamples
            },
            {
                title: "Tags (Chips)",
                path: "/tags",
                component: TagsExamples
            }
        ]
    },
    {
        title: "Forms",
        components: [
            {
                title: "Input",
                path: "/inputs",
                component: InputExamples
            },
            {
                title: "Textarea",
                path: "/textareas",
                component: TextareaExamples
            },
            {
                title: "Selectbox",
                path: "/selectboxes",
                component: SelectExamples
            },
            {
                title: "Radio Buttons",
                path: "/radios",
                component: RadioExamples
            },
            {
                title: "Checkboxes",
                path: "/checkboxes",
                component: CheckboxExamples
            },
            {
                title: "Switches",
                path: "/switches",
                component: SwitchExamples
            },
            {
                title: "File",
                path: "/file",
                component: FileExamples
            },
            {
                title: "Range",
                path: "/range",
                component: InputExamples
            },
            {
                title: "Date & Time Picker",
                path: "/datepicker",
                component: DatepickerExamples
            },
            {
                title: "Autocomplete",
                path: "/autocomplete",
                component: AutocompleteExamples
            }
        ]
    },
    {
        title: "CSS",
        components: [
            {
                title: "Typography",
                path: "/typography",
                component: TypographyExamples
            },
            {
                title: "Grid",
                path: "/grid",
                component: GridExamples
            }
        ]
    }
];
