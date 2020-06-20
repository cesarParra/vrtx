// Generated from src/antlr/VertexParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SubPrimaryContext } from "./VertexParser";
import { ThisPrimaryContext } from "./VertexParser";
import { SuperPrimaryContext } from "./VertexParser";
import { LiteralPrimaryContext } from "./VertexParser";
import { TypeRefPrimaryContext } from "./VertexParser";
import { IdPrimaryContext } from "./VertexParser";
import { SoqlPrimaryContext } from "./VertexParser";
import { PrimaryExpressionContext } from "./VertexParser";
import { DotExpressionContext } from "./VertexParser";
import { ArrayExpressionContext } from "./VertexParser";
import { MethodCallExpressionContext } from "./VertexParser";
import { IfNullExpressionContext } from "./VertexParser";
import { NewExpressionContext } from "./VertexParser";
import { CastExpressionContext } from "./VertexParser";
import { PostOpExpressionContext } from "./VertexParser";
import { PreOpExpressionContext } from "./VertexParser";
import { NegExpressionContext } from "./VertexParser";
import { Arth1ExpressionContext } from "./VertexParser";
import { Arth2ExpressionContext } from "./VertexParser";
import { BitExpressionContext } from "./VertexParser";
import { CmpExpressionContext } from "./VertexParser";
import { InstanceOfExpressionContext } from "./VertexParser";
import { EqualityExpressionContext } from "./VertexParser";
import { BitAndExpressionContext } from "./VertexParser";
import { BitNotExpressionContext } from "./VertexParser";
import { BitOrExpressionContext } from "./VertexParser";
import { LogAndExpressionContext } from "./VertexParser";
import { LogOrExpressionContext } from "./VertexParser";
import { CondExpressionContext } from "./VertexParser";
import { AssignExpressionContext } from "./VertexParser";
import { FormalParametersPositionalWithOptionalContext } from "./VertexParser";
import { FormalParametersOptionalContext } from "./VertexParser";
import { FormalParametersEmptyContext } from "./VertexParser";
import { FormalParametersPositionalContext } from "./VertexParser";
import { TriggerUnitContext } from "./VertexParser";
import { TriggerCaseContext } from "./VertexParser";
import { CompilationUnitContext } from "./VertexParser";
import { TypeDeclarationContext } from "./VertexParser";
import { ClassDeclarationContext } from "./VertexParser";
import { EnumDeclarationContext } from "./VertexParser";
import { EnumConstantsContext } from "./VertexParser";
import { InterfaceDeclarationContext } from "./VertexParser";
import { TypeListContext } from "./VertexParser";
import { ClassBodyContext } from "./VertexParser";
import { InterfaceBodyContext } from "./VertexParser";
import { ClassBodyDeclarationContext } from "./VertexParser";
import { ModifierContext } from "./VertexParser";
import { MemberDeclarationContext } from "./VertexParser";
import { MethodDeclarationContext } from "./VertexParser";
import { ConstructorDeclarationContext } from "./VertexParser";
import { FieldDeclarationContext } from "./VertexParser";
import { PropertyDeclarationContext } from "./VertexParser";
import { InterfaceMethodDeclarationContext } from "./VertexParser";
import { VariableDeclaratorsContext } from "./VertexParser";
import { VariableDeclaratorContext } from "./VertexParser";
import { ArrayInitializerContext } from "./VertexParser";
import { TypeRefContext } from "./VertexParser";
import { ArraySubscriptsContext } from "./VertexParser";
import { TypeNameContext } from "./VertexParser";
import { TypeArgumentsContext } from "./VertexParser";
import { FormalParametersContext } from "./VertexParser";
import { FormalParametersWithOptionalContext } from "./VertexParser";
import { FormalParameterListContext } from "./VertexParser";
import { FormalParameterContext } from "./VertexParser";
import { OptionalPositionalFormalParametersContext } from "./VertexParser";
import { DefaultFormalParameterContext } from "./VertexParser";
import { QualifiedNameContext } from "./VertexParser";
import { LiteralContext } from "./VertexParser";
import { AnnotationContext } from "./VertexParser";
import { ElementValuePairsContext } from "./VertexParser";
import { ElementValuePairContext } from "./VertexParser";
import { ElementValueContext } from "./VertexParser";
import { ElementValueArrayInitializerContext } from "./VertexParser";
import { BlockContext } from "./VertexParser";
import { LocalVariableDeclarationStatementContext } from "./VertexParser";
import { LocalVariableDeclarationContext } from "./VertexParser";
import { StatementContext } from "./VertexParser";
import { IfStatementContext } from "./VertexParser";
import { SwitchStatementContext } from "./VertexParser";
import { WhenControlContext } from "./VertexParser";
import { WhenValueContext } from "./VertexParser";
import { WhenLiteralContext } from "./VertexParser";
import { ForStatementContext } from "./VertexParser";
import { WhileStatementContext } from "./VertexParser";
import { DoWhileStatementContext } from "./VertexParser";
import { TryStatementContext } from "./VertexParser";
import { ReturnStatementContext } from "./VertexParser";
import { ThrowStatementContext } from "./VertexParser";
import { BreakStatementContext } from "./VertexParser";
import { ContinueStatementContext } from "./VertexParser";
import { InsertStatementContext } from "./VertexParser";
import { UpdateStatementContext } from "./VertexParser";
import { DeleteStatementContext } from "./VertexParser";
import { UndeleteStatementContext } from "./VertexParser";
import { UpsertStatementContext } from "./VertexParser";
import { MergeStatementContext } from "./VertexParser";
import { RunAsStatementContext } from "./VertexParser";
import { ExpressionStatementContext } from "./VertexParser";
import { PropertyBlockContext } from "./VertexParser";
import { GetterContext } from "./VertexParser";
import { SetterContext } from "./VertexParser";
import { CatchClauseContext } from "./VertexParser";
import { FinallyBlockContext } from "./VertexParser";
import { ForControlContext } from "./VertexParser";
import { ForInitContext } from "./VertexParser";
import { EnhancedForControlContext } from "./VertexParser";
import { ForUpdateContext } from "./VertexParser";
import { ParExpressionContext } from "./VertexParser";
import { ExpressionListContext } from "./VertexParser";
import { ExpressionContext } from "./VertexParser";
import { PrimaryContext } from "./VertexParser";
import { MethodCallContext } from "./VertexParser";
import { DotMethodCallContext } from "./VertexParser";
import { CreatorContext } from "./VertexParser";
import { CreatedNameContext } from "./VertexParser";
import { IdCreatedNamePairContext } from "./VertexParser";
import { NoRestContext } from "./VertexParser";
import { ClassCreatorRestContext } from "./VertexParser";
import { ArrayCreatorRestContext } from "./VertexParser";
import { MapCreatorRestContext } from "./VertexParser";
import { MapCreatorRestPairContext } from "./VertexParser";
import { SetCreatorRestContext } from "./VertexParser";
import { ArgumentsContext } from "./VertexParser";
import { SoqlLiteralContext } from "./VertexParser";
import { IdContext } from "./VertexParser";
import { AnyIdContext } from "./VertexParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VertexParser`.
 */
export interface VertexParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `subPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSubPrimary?: (ctx: SubPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `subPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSubPrimary?: (ctx: SubPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `thisPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterThisPrimary?: (ctx: ThisPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `thisPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitThisPrimary?: (ctx: ThisPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `superPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSuperPrimary?: (ctx: SuperPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `superPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSuperPrimary?: (ctx: SuperPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `literalPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLiteralPrimary?: (ctx: LiteralPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `literalPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLiteralPrimary?: (ctx: LiteralPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `typeRefPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `typeRefPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `idPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIdPrimary?: (ctx: IdPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `idPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIdPrimary?: (ctx: IdPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `soqlPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSoqlPrimary?: (ctx: SoqlPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `soqlPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSoqlPrimary?: (ctx: SoqlPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by the `primaryExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `primaryExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `dotExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDotExpression?: (ctx: DotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `dotExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDotExpression?: (ctx: DotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `methodCallExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMethodCallExpression?: (ctx: MethodCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `methodCallExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMethodCallExpression?: (ctx: MethodCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ifNullExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIfNullExpression?: (ctx: IfNullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ifNullExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIfNullExpression?: (ctx: IfNullExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `newExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `newExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `castExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `castExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `postOpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPostOpExpression?: (ctx: PostOpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `postOpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPostOpExpression?: (ctx: PostOpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `preOpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPreOpExpression?: (ctx: PreOpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `preOpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPreOpExpression?: (ctx: PreOpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `negExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNegExpression?: (ctx: NegExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `negExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNegExpression?: (ctx: NegExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `arth1Expression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArth1Expression?: (ctx: Arth1ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arth1Expression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArth1Expression?: (ctx: Arth1ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `arth2Expression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArth2Expression?: (ctx: Arth2ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arth2Expression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArth2Expression?: (ctx: Arth2ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitExpression?: (ctx: BitExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitExpression?: (ctx: BitExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `cmpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCmpExpression?: (ctx: CmpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `cmpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCmpExpression?: (ctx: CmpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `instanceOfExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `instanceOfExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `equalityExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitAndExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitAndExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitNotExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitNotExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitOrExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitOrExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logAndExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogAndExpression?: (ctx: LogAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logAndExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogAndExpression?: (ctx: LogAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logOrExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogOrExpression?: (ctx: LogOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logOrExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogOrExpression?: (ctx: LogOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `condExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCondExpression?: (ctx: CondExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `condExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCondExpression?: (ctx: CondExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `assignExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAssignExpression?: (ctx: AssignExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `assignExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAssignExpression?: (ctx: AssignExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `formalParametersPositionalWithOptional`
	 * labeled alternative in `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 */
	enterFormalParametersPositionalWithOptional?: (ctx: FormalParametersPositionalWithOptionalContext) => void;
	/**
	 * Exit a parse tree produced by the `formalParametersPositionalWithOptional`
	 * labeled alternative in `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 */
	exitFormalParametersPositionalWithOptional?: (ctx: FormalParametersPositionalWithOptionalContext) => void;

	/**
	 * Enter a parse tree produced by the `formalParametersOptional`
	 * labeled alternative in `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 */
	enterFormalParametersOptional?: (ctx: FormalParametersOptionalContext) => void;
	/**
	 * Exit a parse tree produced by the `formalParametersOptional`
	 * labeled alternative in `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 */
	exitFormalParametersOptional?: (ctx: FormalParametersOptionalContext) => void;

	/**
	 * Enter a parse tree produced by the `formalParametersEmpty`
	 * labeled alternative in `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParametersEmpty?: (ctx: FormalParametersEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `formalParametersEmpty`
	 * labeled alternative in `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParametersEmpty?: (ctx: FormalParametersEmptyContext) => void;

	/**
	 * Enter a parse tree produced by the `formalParametersPositional`
	 * labeled alternative in `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParametersPositional?: (ctx: FormalParametersPositionalContext) => void;
	/**
	 * Exit a parse tree produced by the `formalParametersPositional`
	 * labeled alternative in `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParametersPositional?: (ctx: FormalParametersPositionalContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.triggerUnit`.
	 * @param ctx the parse tree
	 */
	enterTriggerUnit?: (ctx: TriggerUnitContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.triggerUnit`.
	 * @param ctx the parse tree
	 */
	exitTriggerUnit?: (ctx: TriggerUnitContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.triggerCase`.
	 * @param ctx the parse tree
	 */
	enterTriggerCase?: (ctx: TriggerCaseContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.triggerCase`.
	 * @param ctx the parse tree
	 */
	exitTriggerCase?: (ctx: TriggerCaseContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.typeRef`.
	 * @param ctx the parse tree
	 */
	enterTypeRef?: (ctx: TypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.typeRef`.
	 * @param ctx the parse tree
	 */
	exitTypeRef?: (ctx: TypeRefContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.arraySubscripts`.
	 * @param ctx the parse tree
	 */
	enterArraySubscripts?: (ctx: ArraySubscriptsContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.arraySubscripts`.
	 * @param ctx the parse tree
	 */
	exitArraySubscripts?: (ctx: ArraySubscriptsContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 */
	enterFormalParametersWithOptional?: (ctx: FormalParametersWithOptionalContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 */
	exitFormalParametersWithOptional?: (ctx: FormalParametersWithOptionalContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 */
	enterOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 */
	exitOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.whenControl`.
	 * @param ctx the parse tree
	 */
	enterWhenControl?: (ctx: WhenControlContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.whenControl`.
	 * @param ctx the parse tree
	 */
	exitWhenControl?: (ctx: WhenControlContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.whenValue`.
	 * @param ctx the parse tree
	 */
	enterWhenValue?: (ctx: WhenValueContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.whenValue`.
	 * @param ctx the parse tree
	 */
	exitWhenValue?: (ctx: WhenValueContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.whenLiteral`.
	 * @param ctx the parse tree
	 */
	enterWhenLiteral?: (ctx: WhenLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.whenLiteral`.
	 * @param ctx the parse tree
	 */
	exitWhenLiteral?: (ctx: WhenLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.doWhileStatement`.
	 * @param ctx the parse tree
	 */
	enterDoWhileStatement?: (ctx: DoWhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.doWhileStatement`.
	 * @param ctx the parse tree
	 */
	exitDoWhileStatement?: (ctx: DoWhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	enterInsertStatement?: (ctx: InsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	exitInsertStatement?: (ctx: InsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	exitUpdateStatement?: (ctx: UpdateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatement?: (ctx: DeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.undeleteStatement`.
	 * @param ctx the parse tree
	 */
	enterUndeleteStatement?: (ctx: UndeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.undeleteStatement`.
	 * @param ctx the parse tree
	 */
	exitUndeleteStatement?: (ctx: UndeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.upsertStatement`.
	 * @param ctx the parse tree
	 */
	enterUpsertStatement?: (ctx: UpsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.upsertStatement`.
	 * @param ctx the parse tree
	 */
	exitUpsertStatement?: (ctx: UpsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.mergeStatement`.
	 * @param ctx the parse tree
	 */
	enterMergeStatement?: (ctx: MergeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.mergeStatement`.
	 * @param ctx the parse tree
	 */
	exitMergeStatement?: (ctx: MergeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.runAsStatement`.
	 * @param ctx the parse tree
	 */
	enterRunAsStatement?: (ctx: RunAsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.runAsStatement`.
	 * @param ctx the parse tree
	 */
	exitRunAsStatement?: (ctx: RunAsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.propertyBlock`.
	 * @param ctx the parse tree
	 */
	enterPropertyBlock?: (ctx: PropertyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.propertyBlock`.
	 * @param ctx the parse tree
	 */
	exitPropertyBlock?: (ctx: PropertyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.getter`.
	 * @param ctx the parse tree
	 */
	enterGetter?: (ctx: GetterContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.getter`.
	 * @param ctx the parse tree
	 */
	exitGetter?: (ctx: GetterContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.setter`.
	 * @param ctx the parse tree
	 */
	enterSetter?: (ctx: SetterContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.setter`.
	 * @param ctx the parse tree
	 */
	exitSetter?: (ctx: SetterContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.methodCall`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.methodCall`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.dotMethodCall`.
	 * @param ctx the parse tree
	 */
	enterDotMethodCall?: (ctx: DotMethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.dotMethodCall`.
	 * @param ctx the parse tree
	 */
	exitDotMethodCall?: (ctx: DotMethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.idCreatedNamePair`.
	 * @param ctx the parse tree
	 */
	enterIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.idCreatedNamePair`.
	 * @param ctx the parse tree
	 */
	exitIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.noRest`.
	 * @param ctx the parse tree
	 */
	enterNoRest?: (ctx: NoRestContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.noRest`.
	 * @param ctx the parse tree
	 */
	exitNoRest?: (ctx: NoRestContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterMapCreatorRest?: (ctx: MapCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitMapCreatorRest?: (ctx: MapCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.mapCreatorRestPair`.
	 * @param ctx the parse tree
	 */
	enterMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.mapCreatorRestPair`.
	 * @param ctx the parse tree
	 */
	exitMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.setCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterSetCreatorRest?: (ctx: SetCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.setCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitSetCreatorRest?: (ctx: SetCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.soqlLiteral`.
	 * @param ctx the parse tree
	 */
	enterSoqlLiteral?: (ctx: SoqlLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.soqlLiteral`.
	 * @param ctx the parse tree
	 */
	exitSoqlLiteral?: (ctx: SoqlLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `VertexParser.anyId`.
	 * @param ctx the parse tree
	 */
	enterAnyId?: (ctx: AnyIdContext) => void;
	/**
	 * Exit a parse tree produced by `VertexParser.anyId`.
	 * @param ctx the parse tree
	 */
	exitAnyId?: (ctx: AnyIdContext) => void;
}

