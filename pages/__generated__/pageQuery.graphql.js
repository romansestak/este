/**
 * @flow
 * @relayHash 9084e539c307e7a27fb0e59190e40ee0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppPage$ref = any;
type Page$ref = any;
export type pageQueryVariables = {|
  id: string,
  isPage: boolean,
|};
export type pageQueryResponse = {|
  +$fragmentRefs: AppPage$ref & Page$ref
|};
export type pageQuery = {|
  variables: pageQueryVariables,
  response: pageQueryResponse,
|};
*/


/*
query pageQuery(
  $id: ID!
  $isPage: Boolean!
) {
  ...AppPage_16EYnK
  ...Page_1Bmzm5
}

fragment AppPage_16EYnK on Query {
  me {
    themeName
    id
  }
  ...MainNav_1ppZvl
}

fragment Page_1Bmzm5 on Query {
  page(id: $id) {
    id
    title
    ...PageTitle
  }
}

fragment PageTitle on Page {
  id
  title
}

fragment MainNav_1ppZvl on Query {
  me {
    email
    id
  }
  page(id: $id) @include(if: $isPage) {
    id
    web {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "isPage",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "pageQuery",
  "id": null,
  "text": "query pageQuery(\n  $id: ID!\n  $isPage: Boolean!\n) {\n  ...AppPage_16EYnK\n  ...Page_1Bmzm5\n}\n\nfragment AppPage_16EYnK on Query {\n  me {\n    themeName\n    id\n  }\n  ...MainNav_1ppZvl\n}\n\nfragment Page_1Bmzm5 on Query {\n  page(id: $id) {\n    id\n    title\n    ...PageTitle\n  }\n}\n\nfragment PageTitle on Page {\n  id\n  title\n}\n\nfragment MainNav_1ppZvl on Query {\n  me {\n    email\n    id\n  }\n  page(id: $id) @include(if: $isPage) {\n    id\n    web {\n      id\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "pageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AppPage",
        "args": [
          {
            "kind": "Variable",
            "name": "isPage",
            "variableName": "isPage",
            "type": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "Page",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "pageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "themeName",
            "args": null,
            "storageKey": null
          },
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "page",
        "storageKey": null,
        "args": v2,
        "concreteType": "Page",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarHandle",
            "alias": null,
            "name": "title",
            "args": null,
            "handle": "draft",
            "key": "",
            "filters": null
          }
        ]
      },
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "isPage",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "page",
            "storageKey": null,
            "args": v2,
            "concreteType": "Page",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "web",
                "storageKey": null,
                "args": null,
                "concreteType": "Web",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f393f41382ea748b637564d5204b4242';
module.exports = node;
