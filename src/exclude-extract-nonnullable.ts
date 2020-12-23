export {}

type DebugType = () => void
type SomeTypes = string | number | DebugType

type FunctionType = Exclude<SomeTypes, string | number>
type NonFunctionType = Exclude<SomeTypes, DebugType>
type TypeExludingFunction = Exclude<SomeTypes, Function>

type FunctionalTypeByExtract = Extract<SomeTypes, DebugType>
type NonFunctionalTypeByExtract = Extract<SomeTypes, string | number>
type FunctionalTypeByExtractingFunction = Extract<SomeTypes, Function>

type NullableTypes = string | number | null | undefined
type NonNullableTyes = NonNullable<NullableTypes>
