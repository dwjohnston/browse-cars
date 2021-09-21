const rewire = require("rewire")
const reducers = rewire("./reducers")
const populateFeature = reducers.__get__("populateFeature")
const populateModels = reducers.__get__("populateModels")
const selectMake = reducers.__get__("selectMake")
const selectModel = reducers.__get__("selectModel")
const displayModel = reducers.__get__("displayModel")
// @ponicode
describe("populateFeature", () => {
    test("0", () => {
        let callFunction = () => {
            populateFeature({ models: { length: 10 } }, { data: { id: "bc23a9d531064583ace8f67dad60f6bb", modelId: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            populateFeature({ models: { length: 10 } }, { data: { id: 12, modelId: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            populateFeature({ models: { length: 16 } }, { data: { id: "a1969970175", modelId: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            populateFeature({ models: { length: 64 } }, { data: { id: 12345, modelId: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            populateFeature({ models: { length: 0 } }, { data: { id: 12345, modelId: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            populateFeature({ models: { length: Infinity } }, { data: {} })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("populateModels", () => {
    test("0", () => {
        let callFunction = () => {
            populateModels({ feature: { id: 12, selectedModelId: true, modelId: true, model: "Model 3" }, id: 56784, selectedModelId: true, modelId: true, model: "Mustang" }, { data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            populateModels({ feature: { id: 12345, selectedModelId: false, modelId: true, model: "Mustang" }, id: "bc23a9d531064583ace8f67dad60f6bb", selectedModelId: true, modelId: false, model: "Impala" }, { data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            populateModels({ feature: { id: 12345, selectedModelId: false, modelId: false, model: "Mustang" }, id: 12, selectedModelId: true, modelId: false, model: "Model 3" }, { data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            populateModels({ feature: { id: 56784, selectedModelId: false, modelId: true, model: "Mercielago" }, id: 12, selectedModelId: false, modelId: false, model: "Mustang" }, { data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            populateModels({ feature: { id: "bc23a9d531064583ace8f67dad60f6bb", selectedModelId: false, modelId: true, model: "Model 3" }, id: 987650, selectedModelId: true, modelId: false, model: "CTS" }, { data: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            populateModels({ feature: {}, id: Infinity, selectedModelId: false, modelId: false, model: "" }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("selectMake", () => {
    test("0", () => {
        let callFunction = () => {
            selectMake({ allMakes: 1.0, allModels: false }, { id: 12, makeId: 56784 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            selectMake({ allMakes: 10.0, allModels: false }, { id: "bc23a9d531064583ace8f67dad60f6bb", makeId: 987650 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            selectMake({ allMakes: -29.45, allModels: true }, { id: 12345, makeId: 12 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            selectMake({ allMakes: 0.0, allModels: false }, { id: 12, makeId: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            selectMake({ allMakes: 10.0, allModels: false }, { id: 987650, makeId: 12 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            selectMake(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("selectModel", () => {
    test("0", () => {
        let callFunction = () => {
            selectModel({ allModels: true }, { id: 12, modelId: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            selectModel({ allModels: true }, { id: 12, modelId: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            selectModel({ allModels: true }, { id: 987650, modelId: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            selectModel({ allModels: false }, { id: "a1969970175", modelId: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            selectModel({ allModels: true }, { id: "a1969970175", modelId: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            selectModel(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("displayModel", () => {
    test("0", () => {
        let callFunction = () => {
            displayModel({ allModels: { length: 10 }, allMakes: { length: 16 } }, { modelId: 62562, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", makeId: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            displayModel({ allModels: { length: 10 }, allMakes: { length: 0 } }, { modelId: 60144, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", makeId: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            displayModel({ allModels: { length: 10 }, allMakes: { length: 10 } }, { modelId: "73609-2040", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", makeId: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            displayModel({ allModels: { length: 16 }, allMakes: { length: 1 } }, { modelId: 60144, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", makeId: "a85a8e6b-348b-4011-a1ec-1e78e9620782" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            displayModel({ allModels: { length: 256 }, allMakes: { length: 32 } }, { modelId: "91659-4424", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", makeId: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            displayModel(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
