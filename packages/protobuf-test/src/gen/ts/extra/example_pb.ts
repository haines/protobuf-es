// Copyright 2021-2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.0.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/example.proto (package docs, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message docs.User
 */
export class User extends Message<User> {
  /**
   * @generated from field: string first_name = 1;
   */
  firstName = "";

  /**
   * @generated from field: string last_name = 2;
   */
  lastName = "";

  /**
   * @generated from field: bool active = 3;
   */
  active = false;

  /**
   * @generated from field: docs.User manager = 4;
   */
  manager?: User | undefined;

  /**
   * @generated from field: repeated string locations = 5;
   */
  locations: string[] = [];

  /**
   * @generated from field: map<string, string> projects = 6;
   */
  projects: { [key: string]: string } = {};

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "docs.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "manager", kind: "message", T: User },
    { no: 5, name: "locations", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "projects", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

