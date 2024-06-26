// Generated by https://quicktype.io

export interface PlacesResponse {
  type:      string;
  geocoding: PlacesResponseGeocoding;
  features:  Feature[];
}

export interface Feature {
  type:       string;
  properties: Properties;
  geometry:   Geometry;
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  geocoding: PropertiesGeocoding;
}

export interface PropertiesGeocoding {
  place_id:  number;
  osm_type:  string;
  osm_id:    number;
  osm_key:   string;
  osm_value: string;
  type:      string;
  label:     string;
  name:      string;
}

export interface PlacesResponseGeocoding {
  version:     string;
  attribution: string;
  licence:     string;
  query:       string;
}
