// Copyright 2020-2022 Buf Technologies, Inc.
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
// @generated from file buf/alpha/registry/v1alpha1/module.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * LocalModuleReference is a local module reference.
 *
 * It does not include a remote.
 *
 * @generated from message buf.alpha.registry.v1alpha1.LocalModuleReference
 */
export class LocalModuleReference extends Message<LocalModuleReference> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: string repository = 2;
   */
  repository = "";

  /**
   * either branch or commit
   *
   * @generated from field: string reference = 3;
   */
  reference = "";

  constructor(data?: PartialMessage<LocalModuleReference>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.LocalModuleReference";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reference", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocalModuleReference {
    return new LocalModuleReference().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocalModuleReference {
    return new LocalModuleReference().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocalModuleReference {
    return new LocalModuleReference().fromJsonString(jsonString, options);
  }

  static equals(a: LocalModuleReference | PlainMessage<LocalModuleReference> | undefined, b: LocalModuleReference | PlainMessage<LocalModuleReference> | undefined): boolean {
    return proto3.util.equals(LocalModuleReference, a, b);
  }
}

/**
 * LocalModulePin is a local module pin.
 *
 * It does not include a remote.
 *
 * @generated from message buf.alpha.registry.v1alpha1.LocalModulePin
 */
export class LocalModulePin extends Message<LocalModulePin> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: string repository = 2;
   */
  repository = "";

  /**
   * @generated from field: string branch = 3;
   */
  branch = "";

  /**
   * @generated from field: string commit = 4;
   */
  commit = "";

  /**
   * @generated from field: string digest = 5;
   */
  digest = "";

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp | undefined;

  constructor(data?: PartialMessage<LocalModulePin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.LocalModulePin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "branch", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "commit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "digest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "create_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocalModulePin {
    return new LocalModulePin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocalModulePin {
    return new LocalModulePin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocalModulePin {
    return new LocalModulePin().fromJsonString(jsonString, options);
  }

  static equals(a: LocalModulePin | PlainMessage<LocalModulePin> | undefined, b: LocalModulePin | PlainMessage<LocalModulePin> | undefined): boolean {
    return proto3.util.equals(LocalModulePin, a, b);
  }
}

