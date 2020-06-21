// Generated from src/antlr/VertexParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { NullCoalesceExpressionContext } from "./VertexParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `VertexParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface VertexParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `subPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubPrimary?: (ctx: SubPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisPrimary?: (ctx: ThisPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `superPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperPrimary?: (ctx: SuperPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPrimary?: (ctx: LiteralPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeRefPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `idPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdPrimary?: (ctx: IdPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `soqlPrimary`
	 * labeled alternative in `VertexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlPrimary?: (ctx: SoqlPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `primaryExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dotExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotExpression?: (ctx: DotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `methodCallExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCallExpression?: (ctx: MethodCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `newExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `postOpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostOpExpression?: (ctx: PostOpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `preOpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreOpExpression?: (ctx: PreOpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `negExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegExpression?: (ctx: NegExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arth1Expression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArth1Expression?: (ctx: Arth1ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arth2Expression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArth2Expression?: (ctx: Arth2ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitExpression?: (ctx: BitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `cmpExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmpExpression?: (ctx: CmpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `instanceOfExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitAndExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitNotExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitOrExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logAndExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogAndExpression?: (ctx: LogAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logOrExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogOrExpression?: (ctx: LogOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullCoalesceExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullCoalesceExpression?: (ctx: NullCoalesceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `condExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondExpression?: (ctx: CondExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignExpression`
	 * labeled alternative in `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignExpression?: (ctx: AssignExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `formalParametersPositionalWithOptional`
	 * labeled alternative in `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParametersPositionalWithOptional?: (ctx: FormalParametersPositionalWithOptionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `formalParametersOptional`
	 * labeled alternative in `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParametersOptional?: (ctx: FormalParametersOptionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `formalParametersEmpty`
	 * labeled alternative in `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParametersEmpty?: (ctx: FormalParametersEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `formalParametersPositional`
	 * labeled alternative in `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParametersPositional?: (ctx: FormalParametersPositionalContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.triggerUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerUnit?: (ctx: TriggerUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.triggerCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerCase?: (ctx: TriggerCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.typeRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRef?: (ctx: TypeRefContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.arraySubscripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySubscripts?: (ctx: ArraySubscriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.formalParametersWithOptional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParametersWithOptional?: (ctx: FormalParametersWithOptionalContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.optionalPositionalFormalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalPositionalFormalParameters?: (ctx: OptionalPositionalFormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.defaultFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultFormalParameter?: (ctx: DefaultFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.whenControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenControl?: (ctx: WhenControlContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.whenValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenValue?: (ctx: WhenValueContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.whenLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenLiteral?: (ctx: WhenLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.doWhileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.updateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.deleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.undeleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUndeleteStatement?: (ctx: UndeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.upsertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpsertStatement?: (ctx: UpsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.mergeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeStatement?: (ctx: MergeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.runAsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRunAsStatement?: (ctx: RunAsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.propertyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyBlock?: (ctx: PropertyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.getter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter?: (ctx: GetterContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.dotMethodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotMethodCall?: (ctx: DotMethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.idCreatedNamePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.noRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoRest?: (ctx: NoRestContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.classCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapCreatorRest?: (ctx: MapCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.mapCreatorRestPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.setCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCreatorRest?: (ctx: SetCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.soqlLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlLiteral?: (ctx: SoqlLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `VertexParser.anyId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyId?: (ctx: AnyIdContext) => Result;
}

