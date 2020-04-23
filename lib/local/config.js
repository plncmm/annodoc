// -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-
// vim:set ft=javascript ts=4 sw=4 sts=4 cindent:

var Config = (function(window, undefined) {

    var bratCollData = {
	'entity_types': [
// this is optional
        {
            'type': 'SPAN_DEFAULT',
            'bgColor': '#7fa2ff',
            'borderColor': 'darken'
        },
        {
            'type': 'ARC_DEFAULT',
            'color': 'black',
            'arrowHead': 'triangle,5',
            'labelArrow': 'triangle,3,5',
        },
        {
            'type': 'token',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        },
        {
            'type': '-',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        },
        {
            'type': "Body_Part",
            'labels': ["Body Part"],
            'bgColor': "#9CFFD9"
        },
        {
            'type': "Medication",
            'labels': ["Medication"],
            'bgColor': "#7CE577"
        },
        {
            'type': "Disease",
            'labels': ["Disease"],
            'bgColor': "#C0C5C1"
        },
        {
            'type': "Clinical_Finding",
            'labels': ["Clinical Finding"],
            'bgColor': "#FFCB47"
        },
        {
            'type': "Abbreviation",
            'labels': ["Abbreviation"],
            'bgColor': "#DAC4F7"
        },
        {
            'type': "Family_Member",
            'labels': ["Family Member"],
            'bgColor': "#F39B6D"
        },
	{
            'type': "Medical_Procedure",
            'labels': ["Medical Procedure"],
            'bgColor': "#DDC8C4"
        },
	],
  'event_attribute_types': [],
  'entity_attribute_types': [
        {
            'type':   'Name',
            'values': { 
                'Name' : { 'glyph': '(N)' },
             },
         },
         {
            'type':   'Implicit_Family_Background',
            'values': { 
                'Implicit_Family_Background' : { 'glyph': '(Implicit Family Background)' },
             },
         },
	 {
            'type':   'Waiting',
            'values': { 
                'Waiting' : { 'glyph': '(Waiting)' },
             },
         },
	 {
            'type':   'Done',
            'values': { 
                'Done' : { 'glyph': '(Done)' },
             },
         },
         {
            'type':   'Negated',
            'values': { 
                'Negated' : { 'glyph': '(Negated)' },
             },
         },
         {
            'type':   'Maternal',
            'values': { 
                'Maternal' : { 'glyph': '(Maternal)' },
             },
         },
         {
            'type':   'Paternal',
            'values': { 
                'Paternal' : { 'glyph': '(Paternal)' },
             },
         },
         ],
	'relation_types': [
        {
            'type': 'subj',
            'labels': [ 'subj' ],
            'dashArray': '3,3',
            'color': 'green',
            'args': [
                {
                    'role': 'arg1',
                    'targets': [ 'token' ]
                },
                {
                    'role': 'arg2',
                    'targets': [ 'token' ]
                }
            ]
        },
        {
            'type':   'Has',
            'labels': ["Has"]
         },
        ],
	'event_types': [],
    };

    return {
        bratCollData: bratCollData,
    };
})(window);
