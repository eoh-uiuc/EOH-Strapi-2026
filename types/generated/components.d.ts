import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    Tag1: Schema.Attribute.Enumeration<
      [
        'Agriculture',
        'Art & Design',
        'Bio-Fuel',
        'Biology',
        'Boats',
        'Cars',
        'Chemistry',
        'Construction',
        'Data Science',
        'Design Team',
        'DNA',
        'Electronics',
        'Environment',
        'Food',
        'Future-Oriented',
        'Geology',
        'Good for older students',
        'Health & Medicine',
        'Kid-Friendly',
        'Mechanics',
        'Molecular Scale',
        'Music',
        'Outer-Space',
        'Physics',
        'Planes',
        'Programming',
        'Prosthetics',
        'Research',
        'Robotics',
        'Smart Technology',
        'Sustainable',
        'Water',
        'Weather',
      ]
    >;
    Tag2: Schema.Attribute.Enumeration<
      [
        'Agriculture',
        'Art & Design',
        'Bio-Fuel',
        'Biology',
        'Boats',
        'Cars',
        'Chemistry',
        'Construction',
        'Data Science',
        'Design Team',
        'DNA',
        'Electronics',
        'Environment',
        'Food',
        'Future-Oriented',
        'Geology',
        'Good for older students',
        'Health & Medicine',
        'Kid-Friendly',
        'Mechanics',
        'Molecular Scale',
        'Music',
        'Outer-Space',
        'Physics',
        'Planes',
        'Programming',
        'Prosthetics',
        'Research',
        'Robotics',
        'Smart Technology',
        'Sustainable',
        'Water',
        'Weather',
      ]
    >;
    Tag3: Schema.Attribute.Enumeration<
      [
        'Agriculture',
        'Art & Design',
        'Bio-Fuel',
        'Biology',
        'Boats',
        'Cars',
        'Chemistry',
        'Construction',
        'Data Science',
        'Design Team',
        'DNA',
        'Electronics',
        'Environment',
        'Food',
        'Future-Oriented',
        'Geology',
        'Good for older students',
        'Health & Medicine',
        'Kid-Friendly',
        'Mechanics',
        'Molecular Scale',
        'Music',
        'Outer-Space',
        'Physics',
        'Planes',
        'Programming',
        'Prosthetics',
        'Research',
        'Robotics',
        'Smart Technology',
        'Sustainable',
        'Water',
        'Weather',
      ]
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tags': SharedTags;
    }
  }
}
