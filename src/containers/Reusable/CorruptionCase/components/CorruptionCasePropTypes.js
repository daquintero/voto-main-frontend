import PropTypes from 'prop-types';

// ------------------ PAGE PROPS -------------------
export const RelationshipProps = {
  organizations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    logo: PropTypes.shape({
      logo: PropTypes.string,
    }),
  })),
  individuals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      image: '', // only one is needed
    })),
  })),
  corruptionCases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      image: '', // only one is needed
    })),
    statistics: PropTypes.arrayOf(PropTypes.shape({ // We only need 3 statistic
      link: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
    })),
  })),
  informativeSnippets: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({ // We only need one image.
      image: PropTypes.string,
    })),
    date: PropTypes.instanceOf(Date).isRequired, // Note that this is the submission date
    statistics: PropTypes.arrayOf(PropTypes.shape({ // We only need one statistic
      link: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
    })),
  })),
};


export const PageProps = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape({
    embedUrlSrc: PropTypes.string,
  })),
  images: PropTypes.arrayOf(PropTypes.shape({
    image: '',
  })),
  statistics: PropTypes.arrayOf(PropTypes.shape({ // We only need one statistic
    link: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string,
  })),
  organizations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    logo: PropTypes.shape({
      logo: PropTypes.string,
    }),
  })),
  individuals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      image: '', // only one is needed
    })),
  })),
  corruptionCases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      image: '', // only one is needed
    })),
    statistics: PropTypes.arrayOf(PropTypes.shape({ // We only need 3 statistic
      link: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
    })),
  })),
  informativeSnippets: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({ // We only need one image.
      image: PropTypes.string,
    })),
    date: PropTypes.instanceOf(Date).isRequired, // Note that this is the submission date
    statistics: PropTypes.arrayOf(PropTypes.shape({ // We only need one statistic
      link: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
    })),
  })),
};


// TODO Define Page Default Props

// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  objIn: PropTypes.shape({
    id: PropTypes.number,
    size: PropTypes.string,
    title: PropTypes.string,
    // Note that this is the submission date
    date: PropTypes.instanceOf(Date),
    // We only need one image.
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
    // We only need one statistic for ISCard
    statistics: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      link: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
    })),
  }),
};

export const CardDefaultPropTypes = {
  objIn: {
    id: 0,
    size: 'full',
    title: '',
    date: new Date(),
    images: [{
      image: '',
    }],
    statistics: [{
      id: 0,
      link: '',
      title: '',
      data: '',
      icon: '',
    }],
  },
};


// ---------------- CARD GRID PROPS -----------------

export const CardGridPropTypes = {
  info: PropTypes.arrayOf(CardPropTypes),
};

export const CardGridDefaultPropTypes = [
  CardDefaultPropTypes, CardDefaultPropTypes, CardDefaultPropTypes];
