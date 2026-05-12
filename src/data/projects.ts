export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  coverImg: string;
  images: { src: string; caption: string }[];
  description: string;
  details: {
    location: string;
    duration: string;
    year: string;
    scope: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "restaurant",
    title: "Valsi Restuarant",
    category: "Commercial",
    coverImg: "restaurant-1.jpg",
    images: [
      {
        src: "restaurant-1.jpg",
        caption:
          "Main dining area during fit-out, featuring bespoke LED lighting rig and slat wall panelling.",
      },
      {
        src: "restaurant-2.jpg",
        caption:
          "Premium marble-effect wall and ceiling tiling with recessed LED spotlights.",
      },
      {
        src: "restaurant-3.jpg",
        caption:
          "Open floor plan mid-construction with green LED feature lighting and floor protection in place.",
      },
      {
        src: "restaurant-4.jpg",
        caption:
          "Acoustic slat wall feature panel being installed, with kitchen pass visible in the background.",
      },
      {
        src: "restaurant-5.jpg",
        caption:
          "Secondary dining zone showing completed slat wall and recessed ceiling lights.",
      },
      {
        src: "restaurant-6.jpg",
        caption:
          "Wide-angle view of the main dining space with mirror panels, slat walls, and LED ceiling feature.",
      },
    ],
    description:
      "A full commercial restaurant fit-out delivered by Dev & D Construction. The scope included structural alterations, feature LED lighting design and installation, large-format marble-effect wall and ceiling tiling, bespoke acoustic slat wall panelling, mirror feature walls, and a full MEP package. The project required close coordination with the client's kitchen equipment suppliers and was delivered to a tight programme to meet the client's opening date.",
    details: {
      location: "London",
      duration: "10 weeks",
      year: "2024",
      scope: "Commercial Fit-Out, LED Lighting, Tiling, Joinery, MEP",
    },
  },
  {
    id: 2,
    slug: "residential-property",
    title: "Residential Property",
    category: "Residential",
    coverImg: "residential-1.jpg",
    images: [
      {
        src: "residential-1.jpg",
        caption:
          "Completed rear extension with French doors, porcelain patio, and matching brickwork.",
      },
      {
        src: "residential-2.jpg",
        caption:
          "En-suite shower room with full-height marble-effect tiling and frameless glass enclosure.",
      },
      {
        src: "residential-3.jpg",
        caption:
          "Freshly plastered bedroom with new UPVC windows fitted and ready for decoration.",
      },
      {
        src: "residential-4.jpg",
        caption:
          "New UPVC window installation with plaster reveals completed in the extension.",
      },
      {
        src: "residential-5.jpg",
        caption:
          "Completed bathroom featuring large-format marble tiles, wall-hung vanity, and chrome heated towel rail.",
      },
      {
        src: "residential-6.jpg",
        caption:
          "Foundation trenches excavated for the rear extension groundworks.",
      },
      {
        src: "residential-7.jpg",
        caption:
          "Bathroom vanity unit with marble-effect tiling and chrome fittings during final fit-out.",
      },
      {
        src: "residential-8.jpg",
        caption:
          "Rear extension brickwork and flat roof structure taking shape during construction.",
      },
    ],
    description:
      "A comprehensive residential extension and renovation project including a single-storey rear extension, full bathroom refurbishment, and internal refurbishment throughout. The works covered excavation and foundations, matching brickwork, flat roof construction, UPVC window and door installation, full re-plaster, and a high-end bathroom fit-out with large-format marble-effect tiles, a frameless shower enclosure, wall-hung vanity, and chrome heated towel rail. A new porcelain patio was also laid to the rear.",
    details: {
      location: "Hertfordshire",
      duration: "18 weeks",
      year: "2024",
      scope: "Extension, Groundworks, Brickwork, Bathroom Fit-Out, Plastering",
    },
  },
  {
    id: 3,
    slug: "subway",
    title: "Subway",
    category: "Commercial",
    coverImg: "subway-1.jpg",
    images: [
      {
        src: "subway-1.jpg",
        caption:
          "Completed service counter with digital menu boards, display cabinets, and POS system installed.",
      },
      {
        src: "subway-2.jpg",
        caption:
          "Feature wall with Subway brand artwork, dark tile splashback, and waste management station.",
      },
      {
        src: "subway-3.jpg",
        caption:
          "Seating area with branded feature wall, large-format floor tiles, and full glazed frontage.",
      },
      {
        src: "subway-4.jpg",
        caption:
          "Window bar seating with high stools and promotional window graphics on opening day.",
      },
      {
        src: "subway-5.jpg",
        caption:
          "White tile feature wall with Subway brand artwork panel during final fit-out.",
      },
    ],
    description:
      "A full commercial fit-out of a Subway franchise unit delivered by Dev & D Construction to brand specification. The scope covered strip-out of the existing unit, structural alterations, large-format floor and wall tiling, installation of the branded service counter and display cabinets, digital menu board infrastructure, feature brand artwork panels, and a full MEP package. The project was completed on time to meet the franchisee's opening date.",
    details: {
      location: "Leeds",
      duration: "6 weeks",
      year: "2024",
      scope: "Commercial Fit-Out, Tiling, MEP, Brand Installation",
    },
  },
];
