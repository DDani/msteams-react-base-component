// Copyright (c) Wictor Wilén. All rights reserved.
// Licensed under the MIT license.
// SPDX-License-Identifier: MIT

import React from "react";
import { TeamsSsoContext } from "./TeamsSsoContext";

export const useTeamsSsoContext = () => {
    const context = React.useContext(TeamsSsoContext);
    return context;
};
