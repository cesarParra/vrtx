// Generated from src/antlr/VertexParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { VertexParserListener } from "./VertexParserListener";
import { VertexParserVisitor } from "./VertexParserVisitor";


export class VertexParser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly AFTER = 2;
	public static readonly BEFORE = 3;
	public static readonly BREAK = 4;
	public static readonly CATCH = 5;
	public static readonly CLASS = 6;
	public static readonly CONTINUE = 7;
	public static readonly DELETE = 8;
	public static readonly DO = 9;
	public static readonly ELSE = 10;
	public static readonly ENUM = 11;
	public static readonly EXTENDS = 12;
	public static readonly FINAL = 13;
	public static readonly FINALLY = 14;
	public static readonly FOR = 15;
	public static readonly GET = 16;
	public static readonly GLOBAL = 17;
	public static readonly IF = 18;
	public static readonly IMPLEMENTS = 19;
	public static readonly INHERITED = 20;
	public static readonly INSERT = 21;
	public static readonly INSTANCEOF = 22;
	public static readonly INTERFACE = 23;
	public static readonly MERGE = 24;
	public static readonly NEW = 25;
	public static readonly NULL = 26;
	public static readonly ON = 27;
	public static readonly OVERRIDE = 28;
	public static readonly PRIVATE = 29;
	public static readonly PROTECTED = 30;
	public static readonly PUBLIC = 31;
	public static readonly RETURN = 32;
	public static readonly SYSTEMRUNAS = 33;
	public static readonly SET = 34;
	public static readonly SHARING = 35;
	public static readonly STATIC = 36;
	public static readonly SUPER = 37;
	public static readonly SWITCH = 38;
	public static readonly TESTMETHOD = 39;
	public static readonly THIS = 40;
	public static readonly THROW = 41;
	public static readonly TRANSIENT = 42;
	public static readonly TRIGGER = 43;
	public static readonly TRY = 44;
	public static readonly UNDELETE = 45;
	public static readonly UPDATE = 46;
	public static readonly UPSERT = 47;
	public static readonly VIRTUAL = 48;
	public static readonly VOID = 49;
	public static readonly WEBSERVICE = 50;
	public static readonly WHEN = 51;
	public static readonly WHILE = 52;
	public static readonly WITH = 53;
	public static readonly WITHOUT = 54;
	public static readonly LIST = 55;
	public static readonly MAP = 56;
	public static readonly IntegerLiteral = 57;
	public static readonly NumberLiteral = 58;
	public static readonly BooleanLiteral = 59;
	public static readonly StringTemplateLiteral = 60;
	public static readonly StringLiteral = 61;
	public static readonly NullLiteral = 62;
	public static readonly LPAREN = 63;
	public static readonly RPAREN = 64;
	public static readonly LBRACE = 65;
	public static readonly RBRACE = 66;
	public static readonly LBRACK = 67;
	public static readonly RBRACK = 68;
	public static readonly SEMI = 69;
	public static readonly COMMA = 70;
	public static readonly DOT = 71;
	public static readonly ASSIGN = 72;
	public static readonly GT = 73;
	public static readonly LT = 74;
	public static readonly BANG = 75;
	public static readonly TILDE = 76;
	public static readonly QUESTION = 77;
	public static readonly COLON = 78;
	public static readonly EQUAL = 79;
	public static readonly TRIPLEEQUAL = 80;
	public static readonly NOTEQUAL = 81;
	public static readonly LESSANDGREATER = 82;
	public static readonly TRIPLENOTEQUAL = 83;
	public static readonly AND = 84;
	public static readonly OR = 85;
	public static readonly INC = 86;
	public static readonly DEC = 87;
	public static readonly ADD = 88;
	public static readonly SUB = 89;
	public static readonly MUL = 90;
	public static readonly DIV = 91;
	public static readonly BITAND = 92;
	public static readonly BITOR = 93;
	public static readonly CARET = 94;
	public static readonly MOD = 95;
	public static readonly MAPTO = 96;
	public static readonly TICK = 97;
	public static readonly ADD_ASSIGN = 98;
	public static readonly SUB_ASSIGN = 99;
	public static readonly MUL_ASSIGN = 100;
	public static readonly DIV_ASSIGN = 101;
	public static readonly AND_ASSIGN = 102;
	public static readonly OR_ASSIGN = 103;
	public static readonly XOR_ASSIGN = 104;
	public static readonly MOD_ASSIGN = 105;
	public static readonly LSHIFT_ASSIGN = 106;
	public static readonly RSHIFT_ASSIGN = 107;
	public static readonly URSHIFT_ASSIGN = 108;
	public static readonly NULL_COALESCE = 109;
	public static readonly AT = 110;
	public static readonly DOLLAR = 111;
	public static readonly Identifier = 112;
	public static readonly WS = 113;
	public static readonly DOC_COMMENT = 114;
	public static readonly COMMENT = 115;
	public static readonly LINE_COMMENT = 116;
	public static readonly RULE_triggerUnit = 0;
	public static readonly RULE_triggerCase = 1;
	public static readonly RULE_compilationUnit = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_classDeclaration = 4;
	public static readonly RULE_enumDeclaration = 5;
	public static readonly RULE_enumConstants = 6;
	public static readonly RULE_interfaceDeclaration = 7;
	public static readonly RULE_typeList = 8;
	public static readonly RULE_classBody = 9;
	public static readonly RULE_interfaceBody = 10;
	public static readonly RULE_classBodyDeclaration = 11;
	public static readonly RULE_modifier = 12;
	public static readonly RULE_memberDeclaration = 13;
	public static readonly RULE_methodDeclaration = 14;
	public static readonly RULE_constructorDeclaration = 15;
	public static readonly RULE_fieldDeclaration = 16;
	public static readonly RULE_propertyDeclaration = 17;
	public static readonly RULE_interfaceMethodDeclaration = 18;
	public static readonly RULE_variableDeclarators = 19;
	public static readonly RULE_variableDeclarator = 20;
	public static readonly RULE_arrayInitializer = 21;
	public static readonly RULE_typeRef = 22;
	public static readonly RULE_arraySubscripts = 23;
	public static readonly RULE_typeName = 24;
	public static readonly RULE_typeArguments = 25;
	public static readonly RULE_formalParameters = 26;
	public static readonly RULE_formalParametersWithOptional = 27;
	public static readonly RULE_formalParameterList = 28;
	public static readonly RULE_formalParameter = 29;
	public static readonly RULE_optionalPositionalFormalParameters = 30;
	public static readonly RULE_defaultFormalParameter = 31;
	public static readonly RULE_qualifiedName = 32;
	public static readonly RULE_literal = 33;
	public static readonly RULE_annotation = 34;
	public static readonly RULE_elementValuePairs = 35;
	public static readonly RULE_elementValuePair = 36;
	public static readonly RULE_elementValue = 37;
	public static readonly RULE_elementValueArrayInitializer = 38;
	public static readonly RULE_block = 39;
	public static readonly RULE_localVariableDeclarationStatement = 40;
	public static readonly RULE_localVariableDeclaration = 41;
	public static readonly RULE_statement = 42;
	public static readonly RULE_ifStatement = 43;
	public static readonly RULE_switchStatement = 44;
	public static readonly RULE_whenControl = 45;
	public static readonly RULE_whenValue = 46;
	public static readonly RULE_whenLiteral = 47;
	public static readonly RULE_forStatement = 48;
	public static readonly RULE_whileStatement = 49;
	public static readonly RULE_doWhileStatement = 50;
	public static readonly RULE_tryStatement = 51;
	public static readonly RULE_returnStatement = 52;
	public static readonly RULE_throwStatement = 53;
	public static readonly RULE_breakStatement = 54;
	public static readonly RULE_continueStatement = 55;
	public static readonly RULE_insertStatement = 56;
	public static readonly RULE_updateStatement = 57;
	public static readonly RULE_deleteStatement = 58;
	public static readonly RULE_undeleteStatement = 59;
	public static readonly RULE_upsertStatement = 60;
	public static readonly RULE_mergeStatement = 61;
	public static readonly RULE_runAsStatement = 62;
	public static readonly RULE_expressionStatement = 63;
	public static readonly RULE_propertyBlock = 64;
	public static readonly RULE_getter = 65;
	public static readonly RULE_setter = 66;
	public static readonly RULE_catchClause = 67;
	public static readonly RULE_finallyBlock = 68;
	public static readonly RULE_forControl = 69;
	public static readonly RULE_forInit = 70;
	public static readonly RULE_enhancedForControl = 71;
	public static readonly RULE_forUpdate = 72;
	public static readonly RULE_parExpression = 73;
	public static readonly RULE_expressionList = 74;
	public static readonly RULE_expression = 75;
	public static readonly RULE_primary = 76;
	public static readonly RULE_methodCall = 77;
	public static readonly RULE_dotMethodCall = 78;
	public static readonly RULE_creator = 79;
	public static readonly RULE_createdName = 80;
	public static readonly RULE_idCreatedNamePair = 81;
	public static readonly RULE_noRest = 82;
	public static readonly RULE_classCreatorRest = 83;
	public static readonly RULE_arrayCreatorRest = 84;
	public static readonly RULE_mapCreatorRest = 85;
	public static readonly RULE_mapCreatorRestPair = 86;
	public static readonly RULE_setCreatorRest = 87;
	public static readonly RULE_arguments = 88;
	public static readonly RULE_soqlLiteral = 89;
	public static readonly RULE_id = 90;
	public static readonly RULE_anyId = 91;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"triggerUnit", "triggerCase", "compilationUnit", "typeDeclaration", "classDeclaration", 
		"enumDeclaration", "enumConstants", "interfaceDeclaration", "typeList", 
		"classBody", "interfaceBody", "classBodyDeclaration", "modifier", "memberDeclaration", 
		"methodDeclaration", "constructorDeclaration", "fieldDeclaration", "propertyDeclaration", 
		"interfaceMethodDeclaration", "variableDeclarators", "variableDeclarator", 
		"arrayInitializer", "typeRef", "arraySubscripts", "typeName", "typeArguments", 
		"formalParameters", "formalParametersWithOptional", "formalParameterList", 
		"formalParameter", "optionalPositionalFormalParameters", "defaultFormalParameter", 
		"qualifiedName", "literal", "annotation", "elementValuePairs", "elementValuePair", 
		"elementValue", "elementValueArrayInitializer", "block", "localVariableDeclarationStatement", 
		"localVariableDeclaration", "statement", "ifStatement", "switchStatement", 
		"whenControl", "whenValue", "whenLiteral", "forStatement", "whileStatement", 
		"doWhileStatement", "tryStatement", "returnStatement", "throwStatement", 
		"breakStatement", "continueStatement", "insertStatement", "updateStatement", 
		"deleteStatement", "undeleteStatement", "upsertStatement", "mergeStatement", 
		"runAsStatement", "expressionStatement", "propertyBlock", "getter", "setter", 
		"catchClause", "finallyBlock", "forControl", "forInit", "enhancedForControl", 
		"forUpdate", "parExpression", "expressionList", "expression", "primary", 
		"methodCall", "dotMethodCall", "creator", "createdName", "idCreatedNamePair", 
		"noRest", "classCreatorRest", "arrayCreatorRest", "mapCreatorRest", "mapCreatorRestPair", 
		"setCreatorRest", "arguments", "soqlLiteral", "id", "anyId",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'after'", "'before'", "'break'", "'catch'", 
		"'class'", "'continue'", "'delete'", "'do'", "'else'", "'enum'", "'extends'", 
		"'final'", "'finally'", "'for'", "'get'", "'global'", "'if'", "'implements'", 
		"'inherited'", "'insert'", "'instanceof'", "'interface'", "'merge'", "'new'", 
		"'null'", "'on'", "'override'", "'private'", "'protected'", "'public'", 
		"'return'", "'system.runas'", "'set'", "'sharing'", "'static'", "'super'", 
		"'switch'", "'testmethod'", "'this'", "'throw'", "'transient'", "'trigger'", 
		"'try'", "'undelete'", "'update'", "'upsert'", "'virtual'", "'void'", 
		"'webservice'", "'when'", "'while'", "'with'", "'without'", "'list'", 
		"'map'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'='", 
		"'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'==='", "'!='", "'<>'", 
		"'!=='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", 
		"'|'", "'^'", "'%'", "'=>'", "'`'", "'+='", "'-='", "'*='", "'/='", "'&='", 
		"'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'??'", "'@'", "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "AFTER", "BEFORE", "BREAK", "CATCH", "CLASS", "CONTINUE", 
		"DELETE", "DO", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FOR", 
		"GET", "GLOBAL", "IF", "IMPLEMENTS", "INHERITED", "INSERT", "INSTANCEOF", 
		"INTERFACE", "MERGE", "NEW", "NULL", "ON", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "RETURN", "SYSTEMRUNAS", "SET", "SHARING", "STATIC", "SUPER", 
		"SWITCH", "TESTMETHOD", "THIS", "THROW", "TRANSIENT", "TRIGGER", "TRY", 
		"UNDELETE", "UPDATE", "UPSERT", "VIRTUAL", "VOID", "WEBSERVICE", "WHEN", 
		"WHILE", "WITH", "WITHOUT", "LIST", "MAP", "IntegerLiteral", "NumberLiteral", 
		"BooleanLiteral", "StringTemplateLiteral", "StringLiteral", "NullLiteral", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
		"DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", 
		"TRIPLEEQUAL", "NOTEQUAL", "LESSANDGREATER", "TRIPLENOTEQUAL", "AND", 
		"OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", 
		"MOD", "MAPTO", "TICK", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
		"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
		"RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "NULL_COALESCE", "AT", "DOLLAR", "Identifier", 
		"WS", "DOC_COMMENT", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VertexParser._LITERAL_NAMES, VertexParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VertexParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "VertexParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return VertexParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return VertexParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(VertexParser._ATN, this);
	}
	// @RuleVersion(0)
	public triggerUnit(): TriggerUnitContext {
		let _localctx: TriggerUnitContext = new TriggerUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, VertexParser.RULE_triggerUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(VertexParser.TRIGGER);
			this.state = 185;
			this.id();
			this.state = 186;
			this.match(VertexParser.ON);
			this.state = 187;
			this.id();
			this.state = 188;
			this.match(VertexParser.LPAREN);
			this.state = 189;
			this.triggerCase();
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.COMMA) {
				{
				{
				this.state = 190;
				this.match(VertexParser.COMMA);
				this.state = 191;
				this.triggerCase();
				}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 197;
			this.match(VertexParser.RPAREN);
			this.state = 198;
			this.block();
			this.state = 199;
			this.match(VertexParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triggerCase(): TriggerCaseContext {
		let _localctx: TriggerCaseContext = new TriggerCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, VertexParser.RULE_triggerCase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			_la = this._input.LA(1);
			if (!(_la === VertexParser.AFTER || _la === VertexParser.BEFORE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 202;
			_la = this._input.LA(1);
			if (!(_la === VertexParser.DELETE || _la === VertexParser.INSERT || _la === VertexParser.UNDELETE || _la === VertexParser.UPDATE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, VertexParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.typeDeclaration();
			this.state = 205;
			this.match(VertexParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VertexParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.FINAL) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.INHERITED) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (VertexParser.STATIC - 36)) | (1 << (VertexParser.TESTMETHOD - 36)) | (1 << (VertexParser.TRANSIENT - 36)) | (1 << (VertexParser.VIRTUAL - 36)) | (1 << (VertexParser.WEBSERVICE - 36)) | (1 << (VertexParser.WITH - 36)) | (1 << (VertexParser.WITHOUT - 36)))) !== 0) || _la === VertexParser.AT) {
					{
					{
					this.state = 207;
					this.modifier();
					}
					}
					this.state = 212;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 213;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.FINAL) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.INHERITED) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (VertexParser.STATIC - 36)) | (1 << (VertexParser.TESTMETHOD - 36)) | (1 << (VertexParser.TRANSIENT - 36)) | (1 << (VertexParser.VIRTUAL - 36)) | (1 << (VertexParser.WEBSERVICE - 36)) | (1 << (VertexParser.WITH - 36)) | (1 << (VertexParser.WITHOUT - 36)))) !== 0) || _la === VertexParser.AT) {
					{
					{
					this.state = 214;
					this.modifier();
					}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 220;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.FINAL) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.INHERITED) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (VertexParser.STATIC - 36)) | (1 << (VertexParser.TESTMETHOD - 36)) | (1 << (VertexParser.TRANSIENT - 36)) | (1 << (VertexParser.VIRTUAL - 36)) | (1 << (VertexParser.WEBSERVICE - 36)) | (1 << (VertexParser.WITH - 36)) | (1 << (VertexParser.WITHOUT - 36)))) !== 0) || _la === VertexParser.AT) {
					{
					{
					this.state = 221;
					this.modifier();
					}
					}
					this.state = 226;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 227;
				this.interfaceDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VertexParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(VertexParser.CLASS);
			this.state = 231;
			this.id();
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VertexParser.EXTENDS) {
				{
				this.state = 232;
				this.match(VertexParser.EXTENDS);
				this.state = 233;
				this.typeRef();
				}
			}

			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VertexParser.IMPLEMENTS) {
				{
				this.state = 236;
				this.match(VertexParser.IMPLEMENTS);
				this.state = 237;
				this.typeList();
				}
			}

			this.state = 240;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VertexParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(VertexParser.ENUM);
			this.state = 243;
			this.id();
			this.state = 244;
			this.match(VertexParser.LBRACE);
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)))) !== 0) || _la === VertexParser.Identifier) {
				{
				this.state = 245;
				this.enumConstants();
				}
			}

			this.state = 248;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VertexParser.RULE_enumConstants);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.id();
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.COMMA) {
				{
				{
				this.state = 251;
				this.match(VertexParser.COMMA);
				this.state = 252;
				this.id();
				}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VertexParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(VertexParser.INTERFACE);
			this.state = 259;
			this.id();
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VertexParser.EXTENDS) {
				{
				this.state = 260;
				this.match(VertexParser.EXTENDS);
				this.state = 261;
				this.typeList();
				}
			}

			this.state = 264;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, VertexParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.typeRef();
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.COMMA) {
				{
				{
				this.state = 267;
				this.match(VertexParser.COMMA);
				this.state = 268;
				this.typeRef();
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, VertexParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(VertexParser.LBRACE);
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.CLASS) | (1 << VertexParser.ENUM) | (1 << VertexParser.FINAL) | (1 << VertexParser.GET) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.INTERFACE) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.STATIC - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.TESTMETHOD - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.VIRTUAL - 34)) | (1 << (VertexParser.VOID - 34)) | (1 << (VertexParser.WEBSERVICE - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.LBRACE - 34)))) !== 0) || _la === VertexParser.SEMI || _la === VertexParser.AT || _la === VertexParser.Identifier) {
				{
				{
				this.state = 275;
				this.classBodyDeclaration();
				}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 281;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, VertexParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(VertexParser.LBRACE);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.FINAL) | (1 << VertexParser.GET) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.STATIC - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.TESTMETHOD - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.VIRTUAL - 34)) | (1 << (VertexParser.VOID - 34)) | (1 << (VertexParser.WEBSERVICE - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)))) !== 0) || _la === VertexParser.AT || _la === VertexParser.Identifier) {
				{
				{
				this.state = 284;
				this.interfaceMethodDeclaration();
				}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 290;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, VertexParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 292;
				this.match(VertexParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VertexParser.STATIC) {
					{
					this.state = 293;
					this.match(VertexParser.STATIC);
					}
				}

				this.state = 296;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 300;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 297;
						this.modifier();
						}
						}
					}
					this.state = 302;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 303;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, VertexParser.RULE_modifier);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 306;
				this.annotation();
				}
				break;
			case VertexParser.GLOBAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 307;
				this.match(VertexParser.GLOBAL);
				}
				break;
			case VertexParser.PUBLIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 308;
				this.match(VertexParser.PUBLIC);
				}
				break;
			case VertexParser.PROTECTED:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 309;
				this.match(VertexParser.PROTECTED);
				}
				break;
			case VertexParser.PRIVATE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 310;
				this.match(VertexParser.PRIVATE);
				}
				break;
			case VertexParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 311;
				this.match(VertexParser.TRANSIENT);
				}
				break;
			case VertexParser.STATIC:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 312;
				this.match(VertexParser.STATIC);
				}
				break;
			case VertexParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 313;
				this.match(VertexParser.ABSTRACT);
				}
				break;
			case VertexParser.FINAL:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 314;
				this.match(VertexParser.FINAL);
				}
				break;
			case VertexParser.WEBSERVICE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 315;
				this.match(VertexParser.WEBSERVICE);
				}
				break;
			case VertexParser.OVERRIDE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 316;
				this.match(VertexParser.OVERRIDE);
				}
				break;
			case VertexParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 317;
				this.match(VertexParser.VIRTUAL);
				}
				break;
			case VertexParser.TESTMETHOD:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 318;
				this.match(VertexParser.TESTMETHOD);
				}
				break;
			case VertexParser.WITH:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 319;
				this.match(VertexParser.WITH);
				this.state = 320;
				this.match(VertexParser.SHARING);
				}
				break;
			case VertexParser.WITHOUT:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 321;
				this.match(VertexParser.WITHOUT);
				this.state = 322;
				this.match(VertexParser.SHARING);
				}
				break;
			case VertexParser.INHERITED:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 323;
				this.match(VertexParser.INHERITED);
				this.state = 324;
				this.match(VertexParser.SHARING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, VertexParser.RULE_memberDeclaration);
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 327;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 328;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 329;
				this.constructorDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 330;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 331;
				this.classDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 332;
				this.enumDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 333;
				this.propertyDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, VertexParser.RULE_methodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.AFTER:
			case VertexParser.BEFORE:
			case VertexParser.GET:
			case VertexParser.INHERITED:
			case VertexParser.INSTANCEOF:
			case VertexParser.SET:
			case VertexParser.SHARING:
			case VertexParser.SWITCH:
			case VertexParser.TRANSIENT:
			case VertexParser.TRIGGER:
			case VertexParser.WHEN:
			case VertexParser.WITH:
			case VertexParser.WITHOUT:
			case VertexParser.LIST:
			case VertexParser.MAP:
			case VertexParser.Identifier:
				{
				this.state = 336;
				this.typeRef();
				}
				break;
			case VertexParser.VOID:
				{
				this.state = 337;
				this.match(VertexParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 340;
			this.id();
			this.state = 341;
			this.formalParameters();
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.LBRACE:
				{
				this.state = 342;
				this.block();
				}
				break;
			case VertexParser.SEMI:
				{
				this.state = 343;
				this.match(VertexParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, VertexParser.RULE_constructorDeclaration);
		try {
			this.state = 354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 346;
				this.qualifiedName();
				this.state = 347;
				this.formalParameters();
				this.state = 348;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 350;
				this.qualifiedName();
				this.state = 351;
				this.formalParametersWithOptional();
				this.state = 352;
				this.block();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, VertexParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.typeRef();
			this.state = 357;
			this.variableDeclarators();
			this.state = 358;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, VertexParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.typeRef();
			this.state = 361;
			this.id();
			this.state = 362;
			this.match(VertexParser.LBRACE);
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.FINAL) | (1 << VertexParser.GET) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.INHERITED) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.STATIC - 34)) | (1 << (VertexParser.TESTMETHOD - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.VIRTUAL - 34)) | (1 << (VertexParser.WEBSERVICE - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)))) !== 0) || _la === VertexParser.AT) {
				{
				{
				this.state = 363;
				this.propertyBlock();
				}
				}
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 369;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, VertexParser.RULE_interfaceMethodDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 371;
					this.modifier();
					}
					}
				}
				this.state = 376;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 379;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.AFTER:
			case VertexParser.BEFORE:
			case VertexParser.GET:
			case VertexParser.INHERITED:
			case VertexParser.INSTANCEOF:
			case VertexParser.SET:
			case VertexParser.SHARING:
			case VertexParser.SWITCH:
			case VertexParser.TRANSIENT:
			case VertexParser.TRIGGER:
			case VertexParser.WHEN:
			case VertexParser.WITH:
			case VertexParser.WITHOUT:
			case VertexParser.LIST:
			case VertexParser.MAP:
			case VertexParser.Identifier:
				{
				this.state = 377;
				this.typeRef();
				}
				break;
			case VertexParser.VOID:
				{
				this.state = 378;
				this.match(VertexParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 381;
			this.id();
			this.state = 382;
			this.formalParameters();
			this.state = 383;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, VertexParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.variableDeclarator();
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.COMMA) {
				{
				{
				this.state = 386;
				this.match(VertexParser.COMMA);
				this.state = 387;
				this.variableDeclarator();
				}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, VertexParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.id();
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VertexParser.ASSIGN) {
				{
				this.state = 394;
				this.match(VertexParser.ASSIGN);
				this.state = 395;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, VertexParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(VertexParser.LBRACE);
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
				{
				this.state = 399;
				this.expression(0);
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 400;
						this.match(VertexParser.COMMA);
						this.state = 401;
						this.expression(0);
						}
						}
					}
					this.state = 406;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VertexParser.COMMA) {
					{
					this.state = 407;
					this.match(VertexParser.COMMA);
					}
				}

				}
			}

			this.state = 412;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeRef(): TypeRefContext {
		let _localctx: TypeRefContext = new TypeRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, VertexParser.RULE_typeRef);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.typeName();
			this.state = 419;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 415;
					this.match(VertexParser.DOT);
					this.state = 416;
					this.typeName();
					}
					}
				}
				this.state = 421;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 422;
			this.arraySubscripts();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arraySubscripts(): ArraySubscriptsContext {
		let _localctx: ArraySubscriptsContext = new ArraySubscriptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, VertexParser.RULE_arraySubscripts);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 424;
					this.match(VertexParser.LBRACK);
					this.state = 425;
					this.match(VertexParser.RBRACK);
					}
					}
				}
				this.state = 430;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, VertexParser.RULE_typeName);
		try {
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 431;
				this.match(VertexParser.LIST);
				this.state = 433;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 432;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 435;
				this.match(VertexParser.SET);
				this.state = 437;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 436;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 439;
				this.match(VertexParser.MAP);
				this.state = 441;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 440;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 443;
				this.id();
				this.state = 445;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this.typeArguments();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, VertexParser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(VertexParser.LT);
			this.state = 450;
			this.typeList();
			this.state = 451;
			this.match(VertexParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, VertexParser.RULE_formalParameters);
		try {
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				_localctx = new FormalParametersEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 453;
				this.match(VertexParser.LPAREN);
				this.state = 454;
				this.match(VertexParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new FormalParametersPositionalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 455;
				this.match(VertexParser.LPAREN);
				this.state = 456;
				this.formalParameterList();
				this.state = 457;
				this.match(VertexParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParametersWithOptional(): FormalParametersWithOptionalContext {
		let _localctx: FormalParametersWithOptionalContext = new FormalParametersWithOptionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, VertexParser.RULE_formalParametersWithOptional);
		let _la: number;
		try {
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new FormalParametersPositionalWithOptionalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 461;
				this.match(VertexParser.LPAREN);
				this.state = 462;
				this.formalParameterList();
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VertexParser.COMMA) {
					{
					this.state = 463;
					this.match(VertexParser.COMMA);
					this.state = 464;
					this.optionalPositionalFormalParameters();
					}
				}

				this.state = 467;
				this.match(VertexParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new FormalParametersOptionalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 469;
				this.match(VertexParser.LPAREN);
				this.state = 470;
				this.optionalPositionalFormalParameters();
				this.state = 471;
				this.match(VertexParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, VertexParser.RULE_formalParameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.formalParameter();
			this.state = 480;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 476;
					this.match(VertexParser.COMMA);
					this.state = 477;
					this.formalParameter();
					}
					}
				}
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, VertexParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 483;
					this.modifier();
					}
					}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 489;
			this.typeRef();
			this.state = 490;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext {
		let _localctx: OptionalPositionalFormalParametersContext = new OptionalPositionalFormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, VertexParser.RULE_optionalPositionalFormalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(VertexParser.LBRACK);
			this.state = 493;
			this.defaultFormalParameter();
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.COMMA) {
				{
				{
				this.state = 494;
				this.match(VertexParser.COMMA);
				this.state = 495;
				this.defaultFormalParameter();
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 501;
			this.match(VertexParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultFormalParameter(): DefaultFormalParameterContext {
		let _localctx: DefaultFormalParameterContext = new DefaultFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, VertexParser.RULE_defaultFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.formalParameter();
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VertexParser.ASSIGN) {
				{
				this.state = 504;
				this.match(VertexParser.ASSIGN);
				this.state = 505;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, VertexParser.RULE_qualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.id();
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.DOT) {
				{
				{
				this.state = 509;
				this.match(VertexParser.DOT);
				this.state = 510;
				this.id();
				}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, VertexParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			_la = this._input.LA(1);
			if (!(_la === VertexParser.NULL || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (VertexParser.IntegerLiteral - 57)) | (1 << (VertexParser.NumberLiteral - 57)) | (1 << (VertexParser.BooleanLiteral - 57)) | (1 << (VertexParser.StringTemplateLiteral - 57)) | (1 << (VertexParser.StringLiteral - 57)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, VertexParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(VertexParser.AT);
			this.state = 519;
			this.qualifiedName();
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VertexParser.LPAREN) {
				{
				this.state = 520;
				this.match(VertexParser.LPAREN);
				this.state = 523;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 521;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 522;
					this.elementValue();
					}
					break;
				}
				this.state = 525;
				this.match(VertexParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, VertexParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.elementValuePair();
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)))) !== 0) || _la === VertexParser.COMMA || _la === VertexParser.Identifier) {
				{
				{
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VertexParser.COMMA) {
					{
					this.state = 529;
					this.match(VertexParser.COMMA);
					}
				}

				this.state = 532;
				this.elementValuePair();
				}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, VertexParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.id();
			this.state = 539;
			this.match(VertexParser.ASSIGN);
			this.state = 540;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, VertexParser.RULE_elementValue);
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.AFTER:
			case VertexParser.BEFORE:
			case VertexParser.GET:
			case VertexParser.INHERITED:
			case VertexParser.INSTANCEOF:
			case VertexParser.NEW:
			case VertexParser.NULL:
			case VertexParser.SET:
			case VertexParser.SHARING:
			case VertexParser.SUPER:
			case VertexParser.SWITCH:
			case VertexParser.THIS:
			case VertexParser.TRANSIENT:
			case VertexParser.TRIGGER:
			case VertexParser.WHEN:
			case VertexParser.WITH:
			case VertexParser.WITHOUT:
			case VertexParser.LIST:
			case VertexParser.MAP:
			case VertexParser.IntegerLiteral:
			case VertexParser.NumberLiteral:
			case VertexParser.BooleanLiteral:
			case VertexParser.StringTemplateLiteral:
			case VertexParser.StringLiteral:
			case VertexParser.LPAREN:
			case VertexParser.LBRACK:
			case VertexParser.BANG:
			case VertexParser.TILDE:
			case VertexParser.INC:
			case VertexParser.DEC:
			case VertexParser.ADD:
			case VertexParser.SUB:
			case VertexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 542;
				this.expression(0);
				}
				break;
			case VertexParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 543;
				this.annotation();
				}
				break;
			case VertexParser.LBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 544;
				this.elementValueArrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, VertexParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.match(VertexParser.LBRACE);
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)) | (1 << (VertexParser.LBRACE - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.AT || _la === VertexParser.Identifier) {
				{
				this.state = 548;
				this.elementValue();
				this.state = 553;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 549;
						this.match(VertexParser.COMMA);
						this.state = 550;
						this.elementValue();
						}
						}
					}
					this.state = 555;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				}
			}

			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VertexParser.COMMA) {
				{
				this.state = 558;
				this.match(VertexParser.COMMA);
				}
			}

			this.state = 561;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, VertexParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.match(VertexParser.LBRACE);
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.BREAK) | (1 << VertexParser.CONTINUE) | (1 << VertexParser.DELETE) | (1 << VertexParser.DO) | (1 << VertexParser.FINAL) | (1 << VertexParser.FOR) | (1 << VertexParser.GET) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.IF) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSERT) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.MERGE) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VertexParser.RETURN - 32)) | (1 << (VertexParser.SYSTEMRUNAS - 32)) | (1 << (VertexParser.SET - 32)) | (1 << (VertexParser.SHARING - 32)) | (1 << (VertexParser.STATIC - 32)) | (1 << (VertexParser.SUPER - 32)) | (1 << (VertexParser.SWITCH - 32)) | (1 << (VertexParser.TESTMETHOD - 32)) | (1 << (VertexParser.THIS - 32)) | (1 << (VertexParser.THROW - 32)) | (1 << (VertexParser.TRANSIENT - 32)) | (1 << (VertexParser.TRIGGER - 32)) | (1 << (VertexParser.TRY - 32)) | (1 << (VertexParser.UNDELETE - 32)) | (1 << (VertexParser.UPDATE - 32)) | (1 << (VertexParser.UPSERT - 32)) | (1 << (VertexParser.VIRTUAL - 32)) | (1 << (VertexParser.WEBSERVICE - 32)) | (1 << (VertexParser.WHEN - 32)) | (1 << (VertexParser.WHILE - 32)) | (1 << (VertexParser.WITH - 32)) | (1 << (VertexParser.WITHOUT - 32)) | (1 << (VertexParser.LIST - 32)) | (1 << (VertexParser.MAP - 32)) | (1 << (VertexParser.IntegerLiteral - 32)) | (1 << (VertexParser.NumberLiteral - 32)) | (1 << (VertexParser.BooleanLiteral - 32)) | (1 << (VertexParser.StringTemplateLiteral - 32)) | (1 << (VertexParser.StringLiteral - 32)) | (1 << (VertexParser.LPAREN - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (VertexParser.LBRACE - 65)) | (1 << (VertexParser.LBRACK - 65)) | (1 << (VertexParser.BANG - 65)) | (1 << (VertexParser.TILDE - 65)) | (1 << (VertexParser.INC - 65)) | (1 << (VertexParser.DEC - 65)) | (1 << (VertexParser.ADD - 65)) | (1 << (VertexParser.SUB - 65)))) !== 0) || _la === VertexParser.AT || _la === VertexParser.Identifier) {
				{
				{
				this.state = 564;
				this.statement();
				}
				}
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 570;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, VertexParser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			this.localVariableDeclaration();
			this.state = 573;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, VertexParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 575;
					this.modifier();
					}
					}
				}
				this.state = 580;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 581;
			this.typeRef();
			this.state = 582;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, VertexParser.RULE_statement);
		try {
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 584;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 585;
				this.ifStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 586;
				this.switchStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 587;
				this.forStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 588;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 589;
				this.doWhileStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 590;
				this.tryStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 591;
				this.returnStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 592;
				this.throwStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 593;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 594;
				this.continueStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 595;
				this.insertStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 596;
				this.updateStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 597;
				this.deleteStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 598;
				this.undeleteStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 599;
				this.upsertStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 600;
				this.mergeStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 601;
				this.runAsStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 602;
				this.localVariableDeclarationStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 603;
				this.expressionStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, VertexParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this.match(VertexParser.IF);
			this.state = 607;
			this.parExpression();
			this.state = 608;
			this.statement();
			this.state = 611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 609;
				this.match(VertexParser.ELSE);
				this.state = 610;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, VertexParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.match(VertexParser.SWITCH);
			this.state = 614;
			this.match(VertexParser.ON);
			this.state = 615;
			this.expression(0);
			this.state = 616;
			this.match(VertexParser.LBRACE);
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 617;
				this.whenControl();
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VertexParser.WHEN);
			this.state = 622;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenControl(): WhenControlContext {
		let _localctx: WhenControlContext = new WhenControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, VertexParser.RULE_whenControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this.match(VertexParser.WHEN);
			this.state = 625;
			this.whenValue();
			this.state = 626;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenValue(): WhenValueContext {
		let _localctx: WhenValueContext = new WhenValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, VertexParser.RULE_whenValue);
		let _la: number;
		try {
			this.state = 640;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 628;
				this.match(VertexParser.ELSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 629;
				this.whenLiteral();
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VertexParser.COMMA) {
					{
					{
					this.state = 630;
					this.match(VertexParser.COMMA);
					this.state = 631;
					this.whenLiteral();
					}
					}
					this.state = 636;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 637;
				this.id();
				this.state = 638;
				this.id();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenLiteral(): WhenLiteralContext {
		let _localctx: WhenLiteralContext = new WhenLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, VertexParser.RULE_whenLiteral);
		let _la: number;
		try {
			this.state = 649;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.IntegerLiteral:
			case VertexParser.SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VertexParser.SUB) {
					{
					this.state = 642;
					this.match(VertexParser.SUB);
					}
				}

				this.state = 645;
				this.match(VertexParser.IntegerLiteral);
				}
				break;
			case VertexParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 646;
				this.match(VertexParser.StringLiteral);
				}
				break;
			case VertexParser.NULL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 647;
				this.match(VertexParser.NULL);
				}
				break;
			case VertexParser.AFTER:
			case VertexParser.BEFORE:
			case VertexParser.GET:
			case VertexParser.INHERITED:
			case VertexParser.INSTANCEOF:
			case VertexParser.SET:
			case VertexParser.SHARING:
			case VertexParser.SWITCH:
			case VertexParser.TRANSIENT:
			case VertexParser.TRIGGER:
			case VertexParser.WHEN:
			case VertexParser.WITH:
			case VertexParser.WITHOUT:
			case VertexParser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 648;
				this.id();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, VertexParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.match(VertexParser.FOR);
			this.state = 652;
			this.match(VertexParser.LPAREN);
			this.state = 653;
			this.forControl();
			this.state = 654;
			this.match(VertexParser.RPAREN);
			this.state = 655;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, VertexParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.match(VertexParser.WHILE);
			this.state = 658;
			this.parExpression();
			this.state = 659;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, VertexParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(VertexParser.DO);
			this.state = 662;
			this.statement();
			this.state = 663;
			this.match(VertexParser.WHILE);
			this.state = 664;
			this.parExpression();
			this.state = 665;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, VertexParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this.match(VertexParser.TRY);
			this.state = 668;
			this.block();
			this.state = 678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.CATCH:
				{
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 669;
					this.catchClause();
					}
					}
					this.state = 672;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VertexParser.CATCH);
				this.state = 675;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VertexParser.FINALLY) {
					{
					this.state = 674;
					this.finallyBlock();
					}
				}

				}
				break;
			case VertexParser.FINALLY:
				{
				this.state = 677;
				this.finallyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, VertexParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(VertexParser.RETURN);
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
				{
				this.state = 681;
				this.expression(0);
				}
			}

			this.state = 684;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, VertexParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.match(VertexParser.THROW);
			this.state = 687;
			this.expression(0);
			this.state = 688;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, VertexParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(VertexParser.BREAK);
			this.state = 691;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, VertexParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.match(VertexParser.CONTINUE);
			this.state = 694;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let _localctx: InsertStatementContext = new InsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, VertexParser.RULE_insertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.match(VertexParser.INSERT);
			this.state = 697;
			this.expression(0);
			this.state = 698;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateStatement(): UpdateStatementContext {
		let _localctx: UpdateStatementContext = new UpdateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, VertexParser.RULE_updateStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.match(VertexParser.UPDATE);
			this.state = 701;
			this.expression(0);
			this.state = 702;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteStatement(): DeleteStatementContext {
		let _localctx: DeleteStatementContext = new DeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, VertexParser.RULE_deleteStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.match(VertexParser.DELETE);
			this.state = 705;
			this.expression(0);
			this.state = 706;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public undeleteStatement(): UndeleteStatementContext {
		let _localctx: UndeleteStatementContext = new UndeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, VertexParser.RULE_undeleteStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(VertexParser.UNDELETE);
			this.state = 709;
			this.expression(0);
			this.state = 710;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upsertStatement(): UpsertStatementContext {
		let _localctx: UpsertStatementContext = new UpsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, VertexParser.RULE_upsertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(VertexParser.UPSERT);
			this.state = 713;
			this.expression(0);
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)))) !== 0) || _la === VertexParser.Identifier) {
				{
				this.state = 714;
				this.qualifiedName();
				}
			}

			this.state = 717;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mergeStatement(): MergeStatementContext {
		let _localctx: MergeStatementContext = new MergeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, VertexParser.RULE_mergeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.match(VertexParser.MERGE);
			this.state = 720;
			this.expression(0);
			this.state = 721;
			this.expression(0);
			this.state = 722;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public runAsStatement(): RunAsStatementContext {
		let _localctx: RunAsStatementContext = new RunAsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, VertexParser.RULE_runAsStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(VertexParser.SYSTEMRUNAS);
			this.state = 725;
			this.match(VertexParser.LPAREN);
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
				{
				this.state = 726;
				this.expressionList();
				}
			}

			this.state = 729;
			this.match(VertexParser.RPAREN);
			this.state = 730;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, VertexParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			this.expression(0);
			this.state = 733;
			this.match(VertexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyBlock(): PropertyBlockContext {
		let _localctx: PropertyBlockContext = new PropertyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, VertexParser.RULE_propertyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.FINAL) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.INHERITED) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (VertexParser.STATIC - 36)) | (1 << (VertexParser.TESTMETHOD - 36)) | (1 << (VertexParser.TRANSIENT - 36)) | (1 << (VertexParser.VIRTUAL - 36)) | (1 << (VertexParser.WEBSERVICE - 36)) | (1 << (VertexParser.WITH - 36)) | (1 << (VertexParser.WITHOUT - 36)))) !== 0) || _la === VertexParser.AT) {
				{
				{
				this.state = 735;
				this.modifier();
				}
				}
				this.state = 740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 743;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.GET:
				{
				this.state = 741;
				this.getter();
				}
				break;
			case VertexParser.SET:
				{
				this.state = 742;
				this.setter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, VertexParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			this.match(VertexParser.GET);
			this.state = 748;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.SEMI:
				{
				this.state = 746;
				this.match(VertexParser.SEMI);
				}
				break;
			case VertexParser.LBRACE:
				{
				this.state = 747;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, VertexParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this.match(VertexParser.SET);
			this.state = 753;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.SEMI:
				{
				this.state = 751;
				this.match(VertexParser.SEMI);
				}
				break;
			case VertexParser.LBRACE:
				{
				this.state = 752;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, VertexParser.RULE_catchClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.match(VertexParser.CATCH);
			this.state = 756;
			this.match(VertexParser.LPAREN);
			this.state = 760;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 757;
					this.modifier();
					}
					}
				}
				this.state = 762;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			}
			this.state = 763;
			this.qualifiedName();
			this.state = 764;
			this.id();
			this.state = 765;
			this.match(VertexParser.RPAREN);
			this.state = 766;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, VertexParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this.match(VertexParser.FINALLY);
			this.state = 769;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, VertexParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 771;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.FINAL) | (1 << VertexParser.GET) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.STATIC - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.TESTMETHOD - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.VIRTUAL - 34)) | (1 << (VertexParser.WEBSERVICE - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.AT || _la === VertexParser.Identifier) {
					{
					this.state = 772;
					this.forInit();
					}
				}

				this.state = 775;
				this.match(VertexParser.SEMI);
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
					{
					this.state = 776;
					this.expression(0);
					}
				}

				this.state = 779;
				this.match(VertexParser.SEMI);
				this.state = 781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
					{
					this.state = 780;
					this.forUpdate();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, VertexParser.RULE_forInit);
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 785;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 786;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, VertexParser.RULE_enhancedForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.typeRef();
			this.state = 790;
			this.id();
			this.state = 791;
			this.match(VertexParser.COLON);
			this.state = 792;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, VertexParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, VertexParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.match(VertexParser.LPAREN);
			this.state = 797;
			this.expression(0);
			this.state = 798;
			this.match(VertexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, VertexParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.expression(0);
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.COMMA) {
				{
				{
				this.state = 801;
				this.match(VertexParser.COMMA);
				this.state = 802;
				this.expression(0);
				}
				}
				this.state = 807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 150;
		this.enterRecursionRule(_localctx, 150, VertexParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				_localctx = new PrimaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 809;
				this.primary();
				}
				break;

			case 2:
				{
				_localctx = new MethodCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 810;
				this.methodCall();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 811;
				this.match(VertexParser.NEW);
				this.state = 812;
				this.creator();
				}
				break;

			case 4:
				{
				_localctx = new CastExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 813;
				this.match(VertexParser.LPAREN);
				this.state = 814;
				this.typeRef();
				this.state = 815;
				this.match(VertexParser.RPAREN);
				this.state = 816;
				this.expression(18);
				}
				break;

			case 5:
				{
				_localctx = new PreOpExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 818;
				_la = this._input.LA(1);
				if (!(((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (VertexParser.INC - 86)) | (1 << (VertexParser.DEC - 86)) | (1 << (VertexParser.ADD - 86)) | (1 << (VertexParser.SUB - 86)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 819;
				this.expression(16);
				}
				break;

			case 6:
				{
				_localctx = new NegExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 820;
				_la = this._input.LA(1);
				if (!(_la === VertexParser.BANG || _la === VertexParser.TILDE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 821;
				this.expression(15);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 899;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 897;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
					case 1:
						{
						_localctx = new Arth1ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 824;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 825;
						_la = this._input.LA(1);
						if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (VertexParser.MUL - 90)) | (1 << (VertexParser.DIV - 90)) | (1 << (VertexParser.MOD - 90)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 826;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new Arth2ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 827;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 828;
						_la = this._input.LA(1);
						if (!(_la === VertexParser.ADD || _la === VertexParser.SUB)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 829;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new BitExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 830;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 838;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
						case 1:
							{
							this.state = 831;
							this.match(VertexParser.LT);
							this.state = 832;
							this.match(VertexParser.LT);
							}
							break;

						case 2:
							{
							this.state = 833;
							this.match(VertexParser.GT);
							this.state = 834;
							this.match(VertexParser.GT);
							this.state = 835;
							this.match(VertexParser.GT);
							}
							break;

						case 3:
							{
							this.state = 836;
							this.match(VertexParser.GT);
							this.state = 837;
							this.match(VertexParser.GT);
							}
							break;
						}
						this.state = 840;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new CmpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 841;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 842;
						_la = this._input.LA(1);
						if (!(_la === VertexParser.GT || _la === VertexParser.LT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 844;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VertexParser.ASSIGN) {
							{
							this.state = 843;
							this.match(VertexParser.ASSIGN);
							}
						}

						this.state = 846;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 847;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 848;
						_la = this._input.LA(1);
						if (!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (VertexParser.EQUAL - 79)) | (1 << (VertexParser.TRIPLEEQUAL - 79)) | (1 << (VertexParser.NOTEQUAL - 79)) | (1 << (VertexParser.LESSANDGREATER - 79)) | (1 << (VertexParser.TRIPLENOTEQUAL - 79)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 849;
						this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 850;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 851;
						this.match(VertexParser.BITAND);
						this.state = 852;
						this.expression(9);
						}
						break;

					case 7:
						{
						_localctx = new BitNotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 853;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 854;
						this.match(VertexParser.CARET);
						this.state = 855;
						this.expression(8);
						}
						break;

					case 8:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 856;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 857;
						this.match(VertexParser.BITOR);
						this.state = 858;
						this.expression(7);
						}
						break;

					case 9:
						{
						_localctx = new LogAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 859;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 860;
						this.match(VertexParser.AND);
						this.state = 861;
						this.expression(6);
						}
						break;

					case 10:
						{
						_localctx = new LogOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 862;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 863;
						this.match(VertexParser.OR);
						this.state = 864;
						this.expression(5);
						}
						break;

					case 11:
						{
						_localctx = new CondExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 865;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 866;
						this.match(VertexParser.QUESTION);
						this.state = 867;
						this.expression(0);
						this.state = 868;
						this.match(VertexParser.COLON);
						this.state = 869;
						this.expression(2);
						}
						break;

					case 12:
						{
						_localctx = new AssignExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 871;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 872;
						_la = this._input.LA(1);
						if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (VertexParser.ASSIGN - 72)) | (1 << (VertexParser.ADD_ASSIGN - 72)) | (1 << (VertexParser.SUB_ASSIGN - 72)) | (1 << (VertexParser.MUL_ASSIGN - 72)) | (1 << (VertexParser.DIV_ASSIGN - 72)) | (1 << (VertexParser.AND_ASSIGN - 72)) | (1 << (VertexParser.OR_ASSIGN - 72)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (VertexParser.XOR_ASSIGN - 104)) | (1 << (VertexParser.MOD_ASSIGN - 104)) | (1 << (VertexParser.LSHIFT_ASSIGN - 104)) | (1 << (VertexParser.RSHIFT_ASSIGN - 104)) | (1 << (VertexParser.URSHIFT_ASSIGN - 104)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 873;
						this.expression(1);
						}
						break;

					case 13:
						{
						_localctx = new DotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 874;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 875;
						this.match(VertexParser.DOT);
						this.state = 878;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
						case 1:
							{
							this.state = 876;
							this.dotMethodCall();
							}
							break;

						case 2:
							{
							this.state = 877;
							this.anyId();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new ArrayExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 880;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 881;
						this.match(VertexParser.LBRACK);
						this.state = 882;
						this.expression(0);
						this.state = 883;
						this.match(VertexParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new PostOpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 885;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 886;
						_la = this._input.LA(1);
						if (!(_la === VertexParser.INC || _la === VertexParser.DEC)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 16:
						{
						_localctx = new InstanceOfExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 887;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 888;
						this.match(VertexParser.INSTANCEOF);
						this.state = 889;
						this.typeRef();
						}
						break;

					case 17:
						{
						_localctx = new NullCoalesceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VertexParser.RULE_expression);
						this.state = 890;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 893;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 891;
								this.match(VertexParser.NULL_COALESCE);
								this.state = 892;
								this.expression(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 895;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 901;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, VertexParser.RULE_primary);
		try {
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				_localctx = new SubPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 902;
				this.match(VertexParser.LPAREN);
				this.state = 903;
				this.expression(0);
				this.state = 904;
				this.match(VertexParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new ThisPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 906;
				this.match(VertexParser.THIS);
				}
				break;

			case 3:
				_localctx = new SuperPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 907;
				this.match(VertexParser.SUPER);
				}
				break;

			case 4:
				_localctx = new LiteralPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 908;
				this.literal();
				}
				break;

			case 5:
				_localctx = new TypeRefPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 909;
				this.typeRef();
				this.state = 910;
				this.match(VertexParser.DOT);
				this.state = 911;
				this.match(VertexParser.CLASS);
				}
				break;

			case 6:
				_localctx = new IdPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 913;
				this.id();
				}
				break;

			case 7:
				_localctx = new SoqlPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 914;
				this.soqlLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, VertexParser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 936;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VertexParser.AFTER:
			case VertexParser.BEFORE:
			case VertexParser.GET:
			case VertexParser.INHERITED:
			case VertexParser.INSTANCEOF:
			case VertexParser.SET:
			case VertexParser.SHARING:
			case VertexParser.SWITCH:
			case VertexParser.TRANSIENT:
			case VertexParser.TRIGGER:
			case VertexParser.WHEN:
			case VertexParser.WITH:
			case VertexParser.WITHOUT:
			case VertexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 917;
				this.id();
				this.state = 918;
				this.match(VertexParser.LPAREN);
				this.state = 920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
					{
					this.state = 919;
					this.expressionList();
					}
				}

				this.state = 922;
				this.match(VertexParser.RPAREN);
				}
				break;
			case VertexParser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 924;
				this.match(VertexParser.THIS);
				this.state = 925;
				this.match(VertexParser.LPAREN);
				this.state = 927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
					{
					this.state = 926;
					this.expressionList();
					}
				}

				this.state = 929;
				this.match(VertexParser.RPAREN);
				}
				break;
			case VertexParser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 930;
				this.match(VertexParser.SUPER);
				this.state = 931;
				this.match(VertexParser.LPAREN);
				this.state = 933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
					{
					this.state = 932;
					this.expressionList();
					}
				}

				this.state = 935;
				this.match(VertexParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotMethodCall(): DotMethodCallContext {
		let _localctx: DotMethodCallContext = new DotMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, VertexParser.RULE_dotMethodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 938;
			this.anyId();
			this.state = 939;
			this.match(VertexParser.LPAREN);
			this.state = 941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
				{
				this.state = 940;
				this.expressionList();
				}
			}

			this.state = 943;
			this.match(VertexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, VertexParser.RULE_creator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 945;
			this.createdName();
			this.state = 951;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 946;
				this.noRest();
				}
				break;

			case 2:
				{
				this.state = 947;
				this.classCreatorRest();
				}
				break;

			case 3:
				{
				this.state = 948;
				this.arrayCreatorRest();
				}
				break;

			case 4:
				{
				this.state = 949;
				this.mapCreatorRest();
				}
				break;

			case 5:
				{
				this.state = 950;
				this.setCreatorRest();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, VertexParser.RULE_createdName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 953;
			this.idCreatedNamePair();
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.DOT) {
				{
				{
				this.state = 954;
				this.match(VertexParser.DOT);
				this.state = 955;
				this.idCreatedNamePair();
				}
				}
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idCreatedNamePair(): IdCreatedNamePairContext {
		let _localctx: IdCreatedNamePairContext = new IdCreatedNamePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, VertexParser.RULE_idCreatedNamePair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 961;
			this.anyId();
			this.state = 966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VertexParser.LT) {
				{
				this.state = 962;
				this.match(VertexParser.LT);
				this.state = 963;
				this.typeList();
				this.state = 964;
				this.match(VertexParser.GT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noRest(): NoRestContext {
		let _localctx: NoRestContext = new NoRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, VertexParser.RULE_noRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.match(VertexParser.LBRACE);
			this.state = 969;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, VertexParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, VertexParser.RULE_arrayCreatorRest);
		try {
			this.state = 982;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 973;
				this.match(VertexParser.LBRACK);
				this.state = 974;
				this.expression(0);
				this.state = 975;
				this.match(VertexParser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 977;
				this.match(VertexParser.LBRACK);
				this.state = 978;
				this.match(VertexParser.RBRACK);
				this.state = 980;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 979;
					this.arrayInitializer();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapCreatorRest(): MapCreatorRestContext {
		let _localctx: MapCreatorRestContext = new MapCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, VertexParser.RULE_mapCreatorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 984;
			this.match(VertexParser.LBRACE);
			this.state = 985;
			this.mapCreatorRestPair();
			this.state = 990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.COMMA) {
				{
				{
				this.state = 986;
				this.match(VertexParser.COMMA);
				this.state = 987;
				this.mapCreatorRestPair();
				}
				}
				this.state = 992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 993;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapCreatorRestPair(): MapCreatorRestPairContext {
		let _localctx: MapCreatorRestPairContext = new MapCreatorRestPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, VertexParser.RULE_mapCreatorRestPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			this.expression(0);
			this.state = 996;
			this.match(VertexParser.MAPTO);
			this.state = 997;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setCreatorRest(): SetCreatorRestContext {
		let _localctx: SetCreatorRestContext = new SetCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, VertexParser.RULE_setCreatorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.match(VertexParser.LBRACE);
			this.state = 1000;
			this.expression(0);
			this.state = 1005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VertexParser.COMMA) {
				{
				{
				this.state = 1001;
				this.match(VertexParser.COMMA);
				{
				this.state = 1002;
				this.expression(0);
				}
				}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1008;
			this.match(VertexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, VertexParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this.match(VertexParser.LPAREN);
			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SUPER - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.THIS - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)) | (1 << (VertexParser.LIST - 34)) | (1 << (VertexParser.MAP - 34)) | (1 << (VertexParser.IntegerLiteral - 34)) | (1 << (VertexParser.NumberLiteral - 34)) | (1 << (VertexParser.BooleanLiteral - 34)) | (1 << (VertexParser.StringTemplateLiteral - 34)) | (1 << (VertexParser.StringLiteral - 34)) | (1 << (VertexParser.LPAREN - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (VertexParser.LBRACK - 67)) | (1 << (VertexParser.BANG - 67)) | (1 << (VertexParser.TILDE - 67)) | (1 << (VertexParser.INC - 67)) | (1 << (VertexParser.DEC - 67)) | (1 << (VertexParser.ADD - 67)) | (1 << (VertexParser.SUB - 67)))) !== 0) || _la === VertexParser.Identifier) {
				{
				this.state = 1011;
				this.expressionList();
				}
			}

			this.state = 1014;
			this.match(VertexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soqlLiteral(): SoqlLiteralContext {
		let _localctx: SoqlLiteralContext = new SoqlLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, VertexParser.RULE_soqlLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this.match(VertexParser.LBRACK);
			this.state = 1021;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					this.state = 1019;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
					case 1:
						{
						this.state = 1017;
						this.soqlLiteral();
						}
						break;

					case 2:
						{
						this.state = 1018;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === VertexParser.RBRACK)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					}
				}
				this.state = 1023;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			this.state = 1024;
			this.match(VertexParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, VertexParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1026;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.GET) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (VertexParser.SET - 34)) | (1 << (VertexParser.SHARING - 34)) | (1 << (VertexParser.SWITCH - 34)) | (1 << (VertexParser.TRANSIENT - 34)) | (1 << (VertexParser.TRIGGER - 34)) | (1 << (VertexParser.WHEN - 34)) | (1 << (VertexParser.WITH - 34)) | (1 << (VertexParser.WITHOUT - 34)))) !== 0) || _la === VertexParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anyId(): AnyIdContext {
		let _localctx: AnyIdContext = new AnyIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, VertexParser.RULE_anyId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VertexParser.ABSTRACT) | (1 << VertexParser.AFTER) | (1 << VertexParser.BEFORE) | (1 << VertexParser.BREAK) | (1 << VertexParser.CATCH) | (1 << VertexParser.CLASS) | (1 << VertexParser.CONTINUE) | (1 << VertexParser.DELETE) | (1 << VertexParser.DO) | (1 << VertexParser.ELSE) | (1 << VertexParser.ENUM) | (1 << VertexParser.EXTENDS) | (1 << VertexParser.FINAL) | (1 << VertexParser.FINALLY) | (1 << VertexParser.FOR) | (1 << VertexParser.GET) | (1 << VertexParser.GLOBAL) | (1 << VertexParser.IF) | (1 << VertexParser.IMPLEMENTS) | (1 << VertexParser.INHERITED) | (1 << VertexParser.INSERT) | (1 << VertexParser.INSTANCEOF) | (1 << VertexParser.INTERFACE) | (1 << VertexParser.MERGE) | (1 << VertexParser.NEW) | (1 << VertexParser.NULL) | (1 << VertexParser.ON) | (1 << VertexParser.OVERRIDE) | (1 << VertexParser.PRIVATE) | (1 << VertexParser.PROTECTED) | (1 << VertexParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VertexParser.RETURN - 32)) | (1 << (VertexParser.SET - 32)) | (1 << (VertexParser.SHARING - 32)) | (1 << (VertexParser.STATIC - 32)) | (1 << (VertexParser.SUPER - 32)) | (1 << (VertexParser.SWITCH - 32)) | (1 << (VertexParser.TESTMETHOD - 32)) | (1 << (VertexParser.THIS - 32)) | (1 << (VertexParser.THROW - 32)) | (1 << (VertexParser.TRANSIENT - 32)) | (1 << (VertexParser.TRIGGER - 32)) | (1 << (VertexParser.TRY - 32)) | (1 << (VertexParser.UNDELETE - 32)) | (1 << (VertexParser.UPDATE - 32)) | (1 << (VertexParser.UPSERT - 32)) | (1 << (VertexParser.VIRTUAL - 32)) | (1 << (VertexParser.WEBSERVICE - 32)) | (1 << (VertexParser.WHEN - 32)) | (1 << (VertexParser.WHILE - 32)) | (1 << (VertexParser.WITH - 32)) | (1 << (VertexParser.WITHOUT - 32)) | (1 << (VertexParser.LIST - 32)) | (1 << (VertexParser.MAP - 32)))) !== 0) || _la === VertexParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 75:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);

		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 12);

		case 3:
			return this.precpred(this._ctx, 11);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 4);

		case 10:
			return this.precpred(this._ctx, 2);

		case 11:
			return this.precpred(this._ctx, 1);

		case 12:
			return this.precpred(this._ctx, 22);

		case 13:
			return this.precpred(this._ctx, 21);

		case 14:
			return this.precpred(this._ctx, 17);

		case 15:
			return this.precpred(this._ctx, 10);

		case 16:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03v\u0409\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\xC3\n\x02\f\x02\x0E\x02" +
		"\xC6\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x07\x05\xD3\n\x05\f\x05\x0E\x05\xD6\v\x05" +
		"\x03\x05\x03\x05\x07\x05\xDA\n\x05\f\x05\x0E\x05\xDD\v\x05\x03\x05\x03" +
		"\x05\x07\x05\xE1\n\x05\f\x05\x0E\x05\xE4\v\x05\x03\x05\x05\x05\xE7\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xED\n\x06\x03\x06\x03\x06\x05" +
		"\x06\xF1\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\xF9\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b\u0100\n\b\f\b\x0E\b" +
		"\u0103\v\b\x03\t\x03\t\x03\t\x03\t\x05\t\u0109\n\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x07\n\u0110\n\n\f\n\x0E\n\u0113\v\n\x03\v\x03\v\x07\v\u0117\n" +
		"\v\f\v\x0E\v\u011A\v\v\x03\v\x03\v\x03\f\x03\f\x07\f\u0120\n\f\f\f\x0E" +
		"\f\u0123\v\f\x03\f\x03\f\x03\r\x03\r\x05\r\u0129\n\r\x03\r\x03\r\x07\r" +
		"\u012D\n\r\f\r\x0E\r\u0130\v\r\x03\r\x05\r\u0133\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0148" +
		"\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u0151\n\x0F\x03\x10\x03\x10\x05\x10\u0155\n\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u015B\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\u0165\n\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u016F\n\x13\f\x13\x0E\x13\u0172" +
		"\v\x13\x03\x13\x03\x13\x03\x14\x07\x14\u0177\n\x14\f\x14\x0E\x14\u017A" +
		"\v\x14\x03\x14\x03\x14\x05\x14\u017E\n\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0187\n\x15\f\x15\x0E\x15\u018A\v" +
		"\x15\x03\x16\x03\x16\x03\x16\x05\x16\u018F\n\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x07\x17\u0195\n\x17\f\x17\x0E\x17\u0198\v\x17\x03\x17\x05\x17" +
		"\u019B\n\x17\x05\x17\u019D\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u01A4\n\x18\f\x18\x0E\x18\u01A7\v\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x07\x19\u01AD\n\x19\f\x19\x0E\x19\u01B0\v\x19\x03\x1A\x03\x1A" +
		"\x05\x1A\u01B4\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01B8\n\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u01BC\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01C0\n\x1A\x05\x1A\u01C2" +
		"\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u01CE\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u01D4\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
		"\u01DC\n\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01E1\n\x1E\f\x1E\x0E\x1E" +
		"\u01E4\v\x1E\x03\x1F\x07\x1F\u01E7\n\x1F\f\x1F\x0E\x1F\u01EA\v\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x07 \u01F3\n \f \x0E \u01F6\v" +
		" \x03 \x03 \x03!\x03!\x03!\x05!\u01FD\n!\x03\"\x03\"\x03\"\x07\"\u0202" +
		"\n\"\f\"\x0E\"\u0205\v\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x05$\u020E" +
		"\n$\x03$\x05$\u0211\n$\x03%\x03%\x05%\u0215\n%\x03%\x07%\u0218\n%\f%\x0E" +
		"%\u021B\v%\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u0224\n\'\x03(" +
		"\x03(\x03(\x03(\x07(\u022A\n(\f(\x0E(\u022D\v(\x05(\u022F\n(\x03(\x05" +
		"(\u0232\n(\x03(\x03(\x03)\x03)\x07)\u0238\n)\f)\x0E)\u023B\v)\x03)\x03" +
		")\x03*\x03*\x03*\x03+\x07+\u0243\n+\f+\x0E+\u0246\v+\x03+\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x05,\u025F\n,\x03-\x03-\x03-\x03-\x03-\x05" +
		"-\u0266\n-\x03.\x03.\x03.\x03.\x03.\x06.\u026D\n.\r.\x0E.\u026E\x03.\x03" +
		".\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x070\u027B\n0\f0\x0E0\u027E" +
		"\v0\x030\x030\x030\x050\u0283\n0\x031\x051\u0286\n1\x031\x031\x031\x03" +
		"1\x051\u028C\n1\x032\x032\x032\x032\x032\x032\x033\x033\x033\x033\x03" +
		"4\x034\x034\x034\x034\x034\x035\x035\x035\x065\u02A1\n5\r5\x0E5\u02A2" +
		"\x035\x055\u02A6\n5\x035\x055\u02A9\n5\x036\x036\x056\u02AD\n6\x036\x03" +
		"6\x037\x037\x037\x037\x038\x038\x038\x039\x039\x039\x03:\x03:\x03:\x03" +
		":\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03>\x03" +
		">\x03>\x05>\u02CE\n>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03" +
		"@\x05@\u02DA\n@\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x07B\u02E3\nB\fB\x0E" +
		"B\u02E6\vB\x03B\x03B\x05B\u02EA\nB\x03C\x03C\x03C\x05C\u02EF\nC\x03D\x03" +
		"D\x03D\x05D\u02F4\nD\x03E\x03E\x03E\x07E\u02F9\nE\fE\x0EE\u02FC\vE\x03" +
		"E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x05G\u0308\nG\x03G\x03" +
		"G\x05G\u030C\nG\x03G\x03G\x05G\u0310\nG\x05G\u0312\nG\x03H\x03H\x05H\u0316" +
		"\nH\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x03K\x03K\x03K\x03K\x03L\x03L\x03" +
		"L\x07L\u0326\nL\fL\x0EL\u0329\vL\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u0339\nM\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u0349\nM\x03M\x03" +
		"M\x03M\x03M\x05M\u034F\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u0371\nM\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x06M\u0380\n" +
		"M\rM\x0EM\u0381\x07M\u0384\nM\fM\x0EM\u0387\vM\x03N\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0396\nN\x03O\x03O\x03" +
		"O\x05O\u039B\nO\x03O\x03O\x03O\x03O\x03O\x05O\u03A2\nO\x03O\x03O\x03O" +
		"\x03O\x05O\u03A8\nO\x03O\x05O\u03AB\nO\x03P\x03P\x03P\x05P\u03B0\nP\x03" +
		"P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u03BA\nQ\x03R\x03R\x03R\x07" +
		"R\u03BF\nR\fR\x0ER\u03C2\vR\x03S\x03S\x03S\x03S\x03S\x05S\u03C9\nS\x03" +
		"T\x03T\x03T\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u03D7\n" +
		"V\x05V\u03D9\nV\x03W\x03W\x03W\x03W\x07W\u03DF\nW\fW\x0EW\u03E2\vW\x03" +
		"W\x03W\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x07Y\u03EE\nY\fY\x0EY\u03F1" +
		"\vY\x03Y\x03Y\x03Z\x03Z\x05Z\u03F7\nZ\x03Z\x03Z\x03[\x03[\x03[\x07[\u03FE" +
		"\n[\f[\x0E[\u0401\v[\x03[\x03[\x03\\\x03\\\x03]\x03]\x03]\x03\u03FF\x02" +
		"\x03\x98^\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\x02\x10\x03\x02\x04\x05\x05\x02\n\n\x17" +
		"\x17/0\x04\x02\x1C\x1C;?\x03\x02X[\x03\x02MN\x04\x02\\]aa\x03\x02Z[\x03" +
		"\x02KL\x03\x02QU\x04\x02JJdn\x03\x02XY\x03\x02FF\f\x02\x04\x05\x12\x12" +
		"\x16\x16\x18\x18$%((,-5578rr\x06\x02\x03\"$24:rr\x02\u045C\x02\xBA\x03" +
		"\x02\x02\x02\x04\xCB\x03\x02\x02\x02\x06\xCE\x03\x02\x02\x02\b\xE6\x03" +
		"\x02\x02\x02\n\xE8\x03\x02\x02\x02\f\xF4\x03\x02\x02\x02\x0E\xFC\x03\x02" +
		"\x02\x02\x10\u0104\x03\x02\x02\x02\x12\u010C\x03\x02\x02\x02\x14\u0114" +
		"\x03\x02\x02\x02\x16\u011D\x03\x02\x02\x02\x18\u0132\x03\x02\x02\x02\x1A" +
		"\u0147\x03\x02\x02\x02\x1C\u0150\x03\x02\x02\x02\x1E\u0154\x03\x02\x02" +
		"\x02 \u0164\x03\x02\x02\x02\"\u0166\x03\x02\x02\x02$\u016A\x03\x02\x02" +
		"\x02&\u0178\x03\x02\x02\x02(\u0183\x03\x02\x02\x02*\u018B\x03\x02\x02" +
		"\x02,\u0190\x03\x02\x02\x02.\u01A0\x03\x02\x02\x020\u01AE\x03\x02\x02" +
		"\x022\u01C1\x03\x02\x02\x024\u01C3\x03\x02\x02\x026\u01CD\x03\x02\x02" +
		"\x028\u01DB\x03\x02\x02\x02:\u01DD\x03\x02\x02\x02<\u01E8\x03\x02\x02" +
		"\x02>\u01EE\x03\x02\x02\x02@\u01F9\x03\x02\x02\x02B\u01FE\x03\x02\x02" +
		"\x02D\u0206\x03\x02\x02\x02F\u0208\x03\x02\x02\x02H\u0212\x03\x02\x02" +
		"\x02J\u021C\x03\x02\x02\x02L\u0223\x03\x02\x02\x02N\u0225\x03\x02\x02" +
		"\x02P\u0235\x03\x02\x02\x02R\u023E\x03\x02\x02\x02T\u0244\x03\x02\x02" +
		"\x02V\u025E\x03\x02\x02\x02X\u0260\x03\x02\x02\x02Z\u0267\x03\x02\x02" +
		"\x02\\\u0272\x03\x02\x02\x02^\u0282\x03\x02\x02\x02`\u028B\x03\x02\x02" +
		"\x02b\u028D\x03\x02\x02\x02d\u0293\x03\x02\x02\x02f\u0297\x03\x02\x02" +
		"\x02h\u029D\x03\x02\x02\x02j\u02AA\x03\x02\x02\x02l\u02B0\x03\x02\x02" +
		"\x02n\u02B4\x03\x02\x02\x02p\u02B7\x03\x02\x02\x02r\u02BA\x03\x02\x02" +
		"\x02t\u02BE\x03\x02\x02\x02v\u02C2\x03\x02\x02\x02x\u02C6\x03\x02\x02" +
		"\x02z\u02CA\x03\x02\x02\x02|\u02D1\x03\x02\x02\x02~\u02D6\x03\x02\x02" +
		"\x02\x80\u02DE\x03\x02\x02\x02\x82\u02E4\x03\x02\x02\x02\x84\u02EB\x03" +
		"\x02\x02\x02\x86\u02F0\x03\x02\x02\x02\x88\u02F5\x03\x02\x02\x02\x8A\u0302" +
		"\x03\x02\x02\x02\x8C\u0311\x03\x02\x02\x02\x8E\u0315\x03\x02\x02\x02\x90" +
		"\u0317\x03\x02\x02\x02\x92\u031C\x03\x02\x02\x02\x94\u031E\x03\x02\x02" +
		"\x02\x96\u0322\x03\x02\x02\x02\x98\u0338\x03\x02\x02\x02\x9A\u0395\x03" +
		"\x02\x02\x02\x9C\u03AA\x03\x02\x02\x02\x9E\u03AC\x03\x02\x02\x02\xA0\u03B3" +
		"\x03\x02\x02\x02\xA2\u03BB\x03\x02\x02\x02\xA4\u03C3\x03\x02\x02\x02\xA6" +
		"\u03CA\x03\x02\x02\x02\xA8\u03CD\x03\x02\x02\x02\xAA\u03D8\x03\x02\x02" +
		"\x02\xAC\u03DA\x03\x02\x02\x02\xAE\u03E5\x03\x02\x02\x02\xB0\u03E9\x03" +
		"\x02\x02\x02\xB2\u03F4\x03\x02\x02\x02\xB4\u03FA\x03\x02\x02\x02\xB6\u0404" +
		"\x03\x02\x02\x02\xB8\u0406\x03\x02\x02\x02\xBA\xBB\x07-\x02\x02\xBB\xBC" +
		"\x05\xB6\\\x02\xBC\xBD\x07\x1D\x02\x02\xBD\xBE\x05\xB6\\\x02\xBE\xBF\x07" +
		"A\x02\x02\xBF\xC4\x05\x04\x03\x02\xC0\xC1\x07H\x02\x02\xC1\xC3\x05\x04" +
		"\x03\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02" +
		"\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC4\x03\x02" +
		"\x02\x02\xC7\xC8\x07B\x02\x02\xC8\xC9\x05P)\x02\xC9\xCA\x07\x02\x02\x03" +
		"\xCA\x03\x03\x02\x02\x02\xCB\xCC\t\x02\x02\x02\xCC\xCD\t\x03\x02\x02\xCD" +
		"\x05\x03\x02\x02\x02\xCE\xCF\x05\b\x05\x02\xCF\xD0\x07\x02\x02\x03\xD0" +
		"\x07\x03\x02\x02\x02\xD1\xD3\x05\x1A\x0E\x02\xD2\xD1\x03\x02\x02\x02\xD3" +
		"\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5" +
		"\xD7\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xE7\x05\n\x06\x02\xD8" +
		"\xDA\x05\x1A\x0E\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB" +
		"\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD" +
		"\xDB\x03\x02\x02\x02\xDE\xE7\x05\f\x07\x02\xDF\xE1\x05\x1A\x0E\x02\xE0" +
		"\xDF\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2" +
		"\xE3\x03\x02\x02\x02\xE3\xE5\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5" +
		"\xE7\x05\x10\t\x02\xE6\xD4\x03\x02\x02\x02\xE6\xDB\x03\x02\x02\x02\xE6" +
		"\xE2\x03\x02\x02\x02\xE7\t\x03\x02\x02\x02\xE8\xE9\x07\b\x02\x02\xE9\xEC" +
		"\x05\xB6\\\x02\xEA\xEB\x07\x0E\x02\x02\xEB\xED\x05.\x18\x02\xEC\xEA\x03" +
		"\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEF\x07" +
		"\x15\x02\x02\xEF\xF1\x05\x12\n\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03" +
		"\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x05\x14\v\x02\xF3\v\x03\x02" +
		"\x02\x02\xF4\xF5\x07\r\x02\x02\xF5\xF6\x05\xB6\\\x02\xF6\xF8\x07C\x02" +
		"\x02\xF7\xF9\x05\x0E\b\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02" +
		"\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x07D\x02\x02\xFB\r\x03\x02\x02\x02" +
		"\xFC\u0101\x05\xB6\\\x02\xFD\xFE\x07H\x02\x02\xFE\u0100\x05\xB6\\\x02" +
		"\xFF\xFD\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02" +
		"\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\x0F\x03\x02\x02\x02\u0103\u0101" +
		"\x03\x02\x02\x02\u0104\u0105\x07\x19\x02\x02\u0105\u0108\x05\xB6\\\x02" +
		"\u0106\u0107\x07\x0E\x02\x02\u0107\u0109\x05\x12\n\x02\u0108\u0106\x03" +
		"\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
		"\u010B\x05\x16\f\x02\u010B\x11\x03\x02\x02\x02\u010C\u0111\x05.\x18\x02" +
		"\u010D\u010E\x07H\x02\x02\u010E\u0110\x05.\x18\x02\u010F\u010D\x03\x02" +
		"\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111" +
		"\u0112\x03\x02\x02\x02\u0112\x13\x03\x02\x02\x02\u0113\u0111\x03\x02\x02" +
		"\x02\u0114\u0118\x07C\x02\x02\u0115\u0117\x05\x18\r\x02\u0116\u0115\x03" +
		"\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118" +
		"\u0119\x03\x02\x02\x02\u0119\u011B\x03\x02\x02\x02\u011A\u0118\x03\x02" +
		"\x02\x02\u011B\u011C\x07D\x02\x02\u011C\x15\x03\x02\x02\x02\u011D\u0121" +
		"\x07C\x02\x02\u011E\u0120\x05&\x14\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
		"\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
		"\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124" +
		"\u0125\x07D\x02\x02\u0125\x17\x03\x02\x02\x02\u0126\u0133\x07G\x02\x02" +
		"\u0127\u0129\x07&\x02\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u0133\x05P)\x02\u012B\u012D" +
		"\x05\x1A\x0E\x02\u012C\u012B\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02" +
		"\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x03" +
		"\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0133\x05\x1C\x0F\x02\u0132" +
		"\u0126\x03\x02\x02\x02\u0132\u0128\x03\x02\x02\x02\u0132\u012E\x03\x02" +
		"\x02\x02\u0133\x19\x03\x02\x02\x02\u0134\u0148\x05F$\x02\u0135\u0148\x07" +
		"\x13\x02\x02\u0136\u0148\x07!\x02\x02\u0137\u0148\x07 \x02\x02\u0138\u0148" +
		"\x07\x1F\x02\x02\u0139\u0148\x07,\x02\x02\u013A\u0148\x07&\x02\x02\u013B" +
		"\u0148\x07\x03\x02\x02\u013C\u0148\x07\x0F\x02\x02\u013D\u0148\x074\x02" +
		"\x02\u013E\u0148\x07\x1E\x02\x02\u013F\u0148\x072\x02\x02\u0140\u0148" +
		"\x07)\x02\x02\u0141\u0142\x077\x02\x02\u0142\u0148\x07%\x02\x02\u0143" +
		"\u0144\x078\x02\x02\u0144\u0148\x07%\x02\x02\u0145\u0146\x07\x16\x02\x02" +
		"\u0146\u0148\x07%\x02\x02\u0147\u0134\x03\x02\x02\x02\u0147\u0135\x03" +
		"\x02\x02\x02\u0147\u0136\x03\x02\x02\x02\u0147\u0137\x03\x02\x02\x02\u0147" +
		"\u0138\x03\x02\x02\x02\u0147\u0139\x03\x02\x02\x02\u0147\u013A\x03\x02" +
		"\x02\x02\u0147\u013B\x03\x02\x02\x02\u0147\u013C\x03\x02\x02\x02\u0147" +
		"\u013D\x03\x02\x02\x02\u0147\u013E\x03\x02\x02\x02\u0147\u013F\x03\x02" +
		"\x02\x02\u0147\u0140\x03\x02\x02\x02\u0147\u0141\x03\x02\x02\x02\u0147" +
		"\u0143\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0148\x1B\x03\x02\x02" +
		"\x02\u0149\u0151\x05\x1E\x10\x02\u014A\u0151\x05\"\x12\x02\u014B\u0151" +
		"\x05 \x11\x02\u014C\u0151\x05\x10\t\x02\u014D\u0151\x05\n\x06\x02\u014E" +
		"\u0151\x05\f\x07\x02\u014F\u0151\x05$\x13\x02\u0150\u0149\x03\x02\x02" +
		"\x02\u0150\u014A\x03\x02\x02\x02\u0150\u014B\x03\x02\x02\x02\u0150\u014C" +
		"\x03\x02\x02\x02\u0150\u014D\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02" +
		"\u0150\u014F\x03\x02\x02\x02\u0151\x1D\x03\x02\x02\x02\u0152\u0155\x05" +
		".\x18\x02\u0153\u0155\x073\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0153" +
		"\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x05\xB6\\\x02" +
		"\u0157\u015A\x056\x1C\x02\u0158\u015B\x05P)\x02\u0159\u015B\x07G\x02\x02" +
		"\u015A\u0158\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B\x1F\x03" +
		"\x02\x02\x02\u015C\u015D\x05B\"\x02\u015D\u015E\x056\x1C\x02\u015E\u015F" +
		"\x05P)\x02\u015F\u0165\x03\x02\x02\x02\u0160\u0161\x05B\"\x02\u0161\u0162" +
		"\x058\x1D\x02\u0162\u0163\x05P)\x02\u0163\u0165\x03\x02\x02\x02\u0164" +
		"\u015C\x03\x02\x02\x02\u0164\u0160\x03\x02\x02\x02\u0165!\x03\x02\x02" +
		"\x02\u0166\u0167\x05.\x18\x02\u0167\u0168\x05(\x15\x02\u0168\u0169\x07" +
		"G\x02\x02\u0169#\x03\x02\x02\x02\u016A\u016B\x05.\x18\x02\u016B\u016C" +
		"\x05\xB6\\\x02\u016C\u0170\x07C\x02\x02\u016D\u016F\x05\x82B\x02\u016E" +
		"\u016D\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02" +
		"\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x03\x02\x02\x02\u0172" +
		"\u0170\x03\x02\x02\x02\u0173\u0174\x07D\x02\x02\u0174%\x03\x02\x02\x02" +
		"\u0175\u0177\x05\x1A\x0E\x02\u0176\u0175\x03\x02\x02\x02\u0177\u017A\x03" +
		"\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u017D\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B\u017E\x05.\x18" +
		"\x02\u017C\u017E\x073\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017C" +
		"\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x05\xB6\\\x02" +
		"\u0180\u0181\x056\x1C\x02\u0181\u0182\x07G\x02\x02\u0182\'\x03\x02\x02" +
		"\x02\u0183\u0188\x05*\x16\x02\u0184\u0185\x07H\x02\x02\u0185\u0187\x05" +
		"*\x16\x02\u0186\u0184\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188" +
		"\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189)\x03\x02\x02" +
		"\x02\u018A\u0188\x03\x02\x02\x02\u018B\u018E\x05\xB6\\\x02\u018C\u018D" +
		"\x07J\x02\x02\u018D\u018F\x05\x98M\x02\u018E\u018C\x03\x02\x02\x02\u018E" +
		"\u018F\x03\x02\x02\x02\u018F+\x03\x02\x02\x02\u0190\u019C\x07C\x02\x02" +
		"\u0191\u0196\x05\x98M\x02\u0192\u0193\x07H\x02\x02\u0193\u0195\x05\x98" +
		"M\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194" +
		"\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02" +
		"\u0198\u0196\x03\x02\x02\x02\u0199\u019B\x07H\x02\x02\u019A\u0199\x03" +
		"\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C" +
		"\u0191\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x03\x02" +
		"\x02\x02\u019E\u019F\x07D\x02\x02\u019F-\x03\x02\x02\x02\u01A0\u01A5\x05" +
		"2\x1A\x02\u01A1\u01A2\x07I\x02\x02\u01A2\u01A4\x052\x1A\x02\u01A3\u01A1" +
		"\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02" +
		"\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A5\x03" +
		"\x02\x02\x02\u01A8\u01A9\x050\x19\x02\u01A9/\x03\x02\x02\x02\u01AA\u01AB" +
		"\x07E\x02\x02\u01AB\u01AD\x07F\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD" +
		"\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03\x02" +
		"\x02\x02\u01AF1\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B3" +
		"\x079\x02\x02\u01B2\u01B4\x054\x1B\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3" +
		"\u01B4\x03\x02\x02\x02\u01B4\u01C2\x03\x02\x02\x02\u01B5\u01B7\x07$\x02" +
		"\x02\u01B6\u01B8\x054\x1B\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8" +
		"\x03\x02\x02\x02\u01B8\u01C2\x03\x02\x02\x02\u01B9\u01BB\x07:\x02\x02" +
		"\u01BA\u01BC\x054\x1B\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03" +
		"\x02\x02\x02\u01BC\u01C2\x03\x02\x02\x02\u01BD\u01BF\x05\xB6\\\x02\u01BE" +
		"\u01C0\x054\x1B\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02" +
		"\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01B1\x03\x02\x02\x02\u01C1\u01B5" +
		"\x03\x02\x02\x02\u01C1\u01B9\x03\x02\x02\x02\u01C1\u01BD\x03\x02\x02\x02" +
		"\u01C23\x03\x02\x02\x02\u01C3\u01C4\x07L\x02\x02\u01C4\u01C5\x05\x12\n" +
		"\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01C5\u01C6\x07K\x02\x02\u01C65\x03\x02\x02\x02\u01C7\u01C8\x07A\x02" +
		"\x02\u01C8\u01CE\x07B\x02\x02\u01C9\u01CA\x07A\x02\x02\u01CA\u01CB\x05" +
		":\x1E\x02\u01CB\u01CC\x07B\x02\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01C7" +
		"\x03\x02\x02\x02\u01CD\u01C9\x03\x02\x02\x02\u01CE7\x03\x02\x02\x02\u01CF" +
		"\u01D0\x07A\x02\x02\u01D0\u01D3\x05:\x1E\x02\u01D1\u01D2\x07H\x02\x02" +
		"\u01D2\u01D4\x05> \x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02" +
		"\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x07B\x02\x02\u01D6\u01DC" +
		"\x03\x02\x02\x02\u01D7\u01D8\x07A\x02\x02\u01D8\u01D9\x05> \x02\u01D9" +
		"\u01DA\x07B\x02\x02\u01DA\u01DC\x03\x02\x02\x02\u01DB\u01CF\x03\x02\x02" +
		"\x02\u01DB\u01D7\x03\x02\x02\x02\u01DC9\x03\x02\x02\x02\u01DD\u01E2\x05" +
		"<\x1F\x02\u01DE\u01DF\x07H\x02\x02\u01DF\u01E1\x05<\x1F\x02\u01E0\u01DE" +
		"\x03\x02\x02\x02\u01E1\u01E4\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02" +
		"\u01E2\u01E3\x03\x02\x02\x02\u01E3;\x03\x02\x02\x02\u01E4\u01E2\x03\x02" +
		"\x02\x02\u01E5\u01E7\x05\x1A\x0E\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7" +
		"\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02" +
		"\x02\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB" +
		"\u01EC\x05.\x18\x02\u01EC\u01ED\x05\xB6\\\x02\u01ED=\x03\x02\x02\x02\u01EE" +
		"\u01EF\x07E\x02\x02\u01EF\u01F4\x05@!\x02\u01F0\u01F1\x07H\x02\x02\u01F1" +
		"\u01F3\x05@!\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02" +
		"\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F7\x03" +
		"\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7\u01F8\x07F\x02\x02\u01F8" +
		"?\x03\x02\x02\x02\u01F9\u01FC\x05<\x1F\x02\u01FA\u01FB\x07J\x02\x02\u01FB" +
		"\u01FD\x05\x98M\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02" +
		"\x02\u01FDA\x03\x02\x02\x02\u01FE\u0203\x05\xB6\\\x02\u01FF\u0200\x07" +
		"I\x02\x02\u0200\u0202\x05\xB6\\\x02\u0201\u01FF\x03\x02\x02\x02\u0202" +
		"\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02" +
		"\x02\x02\u0204C\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u0207" +
		"\t\x04\x02\x02\u0207E\x03\x02\x02\x02\u0208\u0209\x07p\x02\x02\u0209\u0210" +
		"\x05B\"\x02\u020A\u020D\x07A\x02\x02\u020B\u020E\x05H%\x02\u020C\u020E" +
		"\x05L\'\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02\u020D" +
		"\u020E\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u0211\x07B\x02" +
		"\x02\u0210\u020A\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211G\x03" +
		"\x02\x02\x02\u0212\u0219\x05J&\x02\u0213\u0215\x07H\x02\x02\u0214\u0213" +
		"\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02" +
		"\u0216\u0218\x05J&\x02\u0217\u0214\x03\x02\x02\x02\u0218\u021B\x03\x02" +
		"\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A" +
		"I\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021D\x05\xB6\\\x02" +
		"\u021D\u021E\x07J\x02\x02\u021E\u021F\x05L\'\x02\u021FK\x03\x02\x02\x02" +
		"\u0220\u0224\x05\x98M\x02\u0221\u0224\x05F$\x02\u0222\u0224\x05N(\x02" +
		"\u0223\u0220\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0223\u0222\x03" +
		"\x02\x02\x02\u0224M\x03\x02\x02\x02\u0225\u022E\x07C\x02\x02\u0226\u022B" +
		"\x05L\'\x02\u0227\u0228\x07H\x02\x02\u0228\u022A\x05L\'\x02\u0229\u0227" +
		"\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02" +
		"\u022B\u022C\x03\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D\u022B\x03" +
		"\x02\x02\x02\u022E\u0226\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F" +
		"\u0231\x03\x02\x02\x02\u0230\u0232\x07H\x02\x02\u0231\u0230\x03\x02\x02" +
		"\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234" +
		"\x07D\x02\x02\u0234O\x03\x02\x02\x02\u0235\u0239\x07C\x02\x02\u0236\u0238" +
		"\x05V,\x02\u0237\u0236\x03\x02\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239" +
		"\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023C\x03\x02" +
		"\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u023D\x07D\x02\x02\u023DQ\x03" +
		"\x02\x02\x02\u023E\u023F\x05T+\x02\u023F\u0240\x07G\x02\x02\u0240S\x03" +
		"\x02\x02\x02\u0241\u0243\x05\x1A\x0E\x02\u0242\u0241\x03\x02\x02\x02\u0243" +
		"\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0245\x03\x02" +
		"\x02\x02\u0245\u0247\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0247" +
		"\u0248\x05.\x18\x02\u0248\u0249\x05(\x15\x02\u0249U\x03\x02\x02\x02\u024A" +
		"\u025F\x05P)\x02\u024B\u025F\x05X-\x02\u024C\u025F\x05Z.\x02\u024D\u025F" +
		"\x05b2\x02\u024E\u025F\x05d3\x02\u024F\u025F\x05f4\x02\u0250\u025F\x05" +
		"h5\x02\u0251\u025F\x05j6\x02\u0252\u025F\x05l7\x02\u0253\u025F\x05n8\x02" +
		"\u0254\u025F\x05p9\x02\u0255\u025F\x05r:\x02\u0256\u025F\x05t;\x02\u0257" +
		"\u025F\x05v<\x02\u0258\u025F\x05x=\x02\u0259\u025F\x05z>\x02\u025A\u025F" +
		"\x05|?\x02\u025B\u025F\x05~@\x02\u025C\u025F\x05R*\x02\u025D\u025F\x05" +
		"\x80A\x02\u025E\u024A\x03\x02\x02\x02\u025E\u024B\x03\x02\x02\x02\u025E" +
		"\u024C\x03\x02\x02\x02\u025E\u024D\x03\x02\x02\x02\u025E\u024E\x03\x02" +
		"\x02\x02\u025E\u024F\x03\x02\x02\x02\u025E\u0250\x03\x02\x02\x02\u025E" +
		"\u0251\x03\x02\x02\x02\u025E\u0252\x03\x02\x02\x02\u025E\u0253\x03\x02" +
		"\x02\x02\u025E\u0254\x03\x02\x02\x02\u025E\u0255\x03\x02\x02\x02\u025E" +
		"\u0256\x03\x02\x02\x02\u025E\u0257\x03\x02\x02\x02\u025E\u0258\x03\x02" +
		"\x02\x02\u025E\u0259\x03\x02\x02\x02\u025E\u025A\x03\x02\x02\x02\u025E" +
		"\u025B\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025D\x03\x02" +
		"\x02\x02\u025FW\x03\x02\x02\x02\u0260\u0261\x07\x14\x02\x02\u0261\u0262" +
		"\x05\x94K\x02\u0262\u0265\x05V,\x02\u0263\u0264\x07\f\x02\x02\u0264\u0266" +
		"\x05V,\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266" +
		"Y\x03\x02\x02\x02\u0267\u0268\x07(\x02\x02\u0268\u0269\x07\x1D\x02\x02" +
		"\u0269\u026A\x05\x98M\x02\u026A\u026C\x07C\x02\x02\u026B\u026D\x05\\/" +
		"\x02\u026C\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026C" +
		"\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02" +
		"\u0270\u0271\x07D\x02\x02\u0271[\x03\x02\x02\x02\u0272\u0273\x075\x02" +
		"\x02\u0273\u0274\x05^0\x02\u0274\u0275\x05P)\x02\u0275]\x03\x02\x02\x02" +
		"\u0276\u0283\x07\f\x02\x02\u0277\u027C\x05`1\x02\u0278\u0279\x07H\x02" +
		"\x02\u0279\u027B\x05`1\x02\u027A\u0278\x03\x02\x02\x02\u027B\u027E\x03" +
		"\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D" +
		"\u0283\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027F\u0280\x05\xB6" +
		"\\\x02\u0280\u0281\x05\xB6\\\x02\u0281\u0283\x03\x02\x02\x02\u0282\u0276" +
		"\x03\x02\x02\x02\u0282\u0277\x03\x02\x02\x02\u0282\u027F\x03\x02\x02\x02" +
		"\u0283_\x03\x02\x02\x02\u0284\u0286\x07[\x02\x02\u0285\u0284\x03\x02\x02" +
		"\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u028C" +
		"\x07;\x02\x02\u0288\u028C\x07?\x02\x02\u0289\u028C\x07\x1C\x02\x02\u028A" +
		"\u028C\x05\xB6\\\x02\u028B\u0285\x03\x02\x02\x02\u028B\u0288\x03\x02\x02" +
		"\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028A\x03\x02\x02\x02\u028Ca\x03" +
		"\x02\x02\x02\u028D\u028E\x07\x11\x02\x02\u028E\u028F\x07A\x02\x02\u028F" +
		"\u0290\x05\x8CG\x02\u0290\u0291\x07B\x02\x02\u0291\u0292\x05V,\x02\u0292" +
		"c\x03\x02\x02\x02\u0293\u0294\x076\x02\x02\u0294\u0295\x05\x94K\x02\u0295" +
		"\u0296\x05V,\x02\u0296e\x03\x02\x02\x02\u0297\u0298\x07\v\x02\x02\u0298" +
		"\u0299\x05V,\x02\u0299\u029A\x076\x02\x02\u029A\u029B\x05\x94K\x02\u029B" +
		"\u029C\x07G\x02\x02\u029Cg\x03\x02\x02\x02\u029D\u029E\x07.\x02\x02\u029E" +
		"\u02A8\x05P)\x02\u029F\u02A1\x05\x88E\x02\u02A0\u029F\x03\x02\x02\x02" +
		"\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03" +
		"\x02\x02\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A6\x05\x8AF\x02\u02A5" +
		"\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A9\x03\x02" +
		"\x02\x02\u02A7\u02A9\x05\x8AF\x02\u02A8\u02A0\x03\x02\x02\x02\u02A8\u02A7" +
		"\x03\x02\x02\x02\u02A9i\x03\x02\x02\x02\u02AA\u02AC\x07\"\x02\x02\u02AB" +
		"\u02AD\x05\x98M\x02\u02AC\u02AB\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02" +
		"\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x07G\x02\x02\u02AFk\x03\x02" +
		"\x02\x02\u02B0\u02B1\x07+\x02\x02\u02B1\u02B2\x05\x98M\x02\u02B2\u02B3" +
		"\x07G\x02\x02\u02B3m\x03\x02\x02\x02\u02B4\u02B5\x07\x06\x02\x02\u02B5" +
		"\u02B6\x07G\x02\x02\u02B6o\x03\x02\x02\x02\u02B7\u02B8\x07\t\x02\x02\u02B8" +
		"\u02B9\x07G\x02\x02\u02B9q\x03\x02\x02\x02\u02BA\u02BB\x07\x17\x02\x02" +
		"\u02BB\u02BC\x05\x98M\x02\u02BC\u02BD\x07G\x02\x02\u02BDs\x03\x02\x02" +
		"\x02\u02BE\u02BF\x070\x02\x02\u02BF\u02C0\x05\x98M\x02\u02C0\u02C1\x07" +
		"G\x02\x02\u02C1u\x03\x02\x02\x02\u02C2\u02C3\x07\n\x02\x02\u02C3\u02C4" +
		"\x05\x98M\x02\u02C4\u02C5\x07G\x02\x02\u02C5w\x03\x02\x02\x02\u02C6\u02C7" +
		"\x07/\x02\x02\u02C7\u02C8\x05\x98M\x02\u02C8\u02C9\x07G\x02\x02\u02C9" +
		"y\x03\x02\x02\x02\u02CA\u02CB\x071\x02\x02\u02CB\u02CD\x05\x98M\x02\u02CC" +
		"\u02CE\x05B\"\x02\u02CD\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02" +
		"\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D0\x07G\x02\x02\u02D0{\x03\x02" +
		"\x02\x02\u02D1\u02D2\x07\x1A\x02\x02\u02D2\u02D3\x05\x98M\x02\u02D3\u02D4" +
		"\x05\x98M\x02\u02D4\u02D5\x07G\x02\x02\u02D5}\x03\x02\x02\x02\u02D6\u02D7" +
		"\x07#\x02\x02\u02D7\u02D9\x07A\x02\x02\u02D8\u02DA\x05\x96L\x02\u02D9" +
		"\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x03\x02" +
		"\x02\x02\u02DB\u02DC\x07B\x02\x02\u02DC\u02DD\x05P)\x02\u02DD\x7F\x03" +
		"\x02\x02\x02\u02DE\u02DF\x05\x98M\x02\u02DF\u02E0\x07G\x02\x02\u02E0\x81" +
		"\x03\x02\x02\x02\u02E1\u02E3\x05\x1A\x0E\x02\u02E2\u02E1\x03\x02\x02\x02" +
		"\u02E3\u02E6\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E4\u02E5\x03" +
		"\x02\x02\x02\u02E5\u02E9\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7" +
		"\u02EA\x05\x84C\x02\u02E8\u02EA\x05\x86D\x02\u02E9\u02E7\x03\x02\x02\x02" +
		"\u02E9\u02E8\x03\x02\x02\x02\u02EA\x83\x03\x02\x02\x02\u02EB\u02EE\x07" +
		"\x12\x02\x02\u02EC\u02EF\x07G\x02\x02\u02ED\u02EF\x05P)\x02\u02EE\u02EC" +
		"\x03\x02\x02\x02\u02EE\u02ED\x03\x02\x02\x02\u02EF\x85\x03\x02\x02\x02" +
		"\u02F0\u02F3\x07$\x02\x02\u02F1\u02F4\x07G\x02\x02\u02F2\u02F4\x05P)\x02" +
		"\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F2\x03\x02\x02\x02\u02F4\x87\x03" +
		"\x02\x02\x02\u02F5\u02F6\x07\x07\x02\x02\u02F6\u02FA\x07A\x02\x02\u02F7" +
		"\u02F9\x05\x1A\x0E\x02\u02F8\u02F7\x03\x02\x02\x02\u02F9\u02FC\x03\x02" +
		"\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB" +
		"\u02FD\x03\x02\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FD\u02FE\x05B\"" +
		"\x02\u02FE\u02FF\x05\xB6\\\x02\u02FF\u0300\x07B\x02\x02\u0300\u0301\x05" +
		"P)\x02\u0301\x89\x03\x02\x02\x02\u0302\u0303\x07\x10\x02\x02\u0303\u0304" +
		"\x05P)\x02\u0304\x8B\x03\x02\x02\x02\u0305\u0312\x05\x90I\x02\u0306\u0308" +
		"\x05\x8EH\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02" +
		"\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x07G\x02\x02\u030A\u030C\x05" +
		"\x98M\x02\u030B\u030A\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C" +
		"\u030D\x03\x02\x02\x02\u030D\u030F\x07G\x02\x02\u030E\u0310\x05\x92J\x02" +
		"\u030F\u030E\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0312\x03" +
		"\x02\x02\x02\u0311\u0305\x03\x02\x02\x02\u0311\u0307\x03\x02\x02\x02\u0312" +
		"\x8D\x03\x02\x02\x02\u0313\u0316\x05T+\x02\u0314\u0316\x05\x96L\x02\u0315" +
		"\u0313\x03\x02\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\x8F\x03\x02\x02" +
		"\x02\u0317\u0318\x05.\x18\x02\u0318\u0319\x05\xB6\\\x02\u0319\u031A\x07" +
		"P\x02\x02\u031A\u031B\x05\x98M\x02\u031B\x91\x03\x02\x02\x02\u031C\u031D" +
		"\x05\x96L\x02\u031D\x93\x03\x02\x02\x02\u031E\u031F\x07A\x02\x02\u031F" +
		"\u0320\x05\x98M\x02\u0320\u0321\x07B\x02\x02\u0321\x95\x03\x02\x02\x02" +
		"\u0322\u0327\x05\x98M\x02\u0323\u0324\x07H\x02\x02\u0324\u0326\x05\x98" +
		"M\x02\u0325\u0323\x03\x02\x02\x02\u0326\u0329\x03\x02\x02\x02\u0327\u0325" +
		"\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\x97\x03\x02\x02\x02" +
		"\u0329\u0327\x03\x02\x02\x02\u032A\u032B\bM\x01\x02\u032B\u0339\x05\x9A" +
		"N\x02\u032C\u0339\x05\x9CO\x02\u032D\u032E\x07\x1B\x02\x02\u032E\u0339" +
		"\x05\xA0Q\x02\u032F\u0330\x07A\x02\x02\u0330\u0331\x05.\x18\x02\u0331" +
		"\u0332\x07B\x02\x02\u0332\u0333\x05\x98M\x14\u0333\u0339\x03\x02\x02\x02" +
		"\u0334\u0335\t\x05\x02\x02\u0335\u0339\x05\x98M\x12\u0336\u0337\t\x06" +
		"\x02\x02\u0337\u0339\x05\x98M\x11\u0338\u032A\x03\x02\x02\x02\u0338\u032C" +
		"\x03\x02\x02\x02\u0338\u032D\x03\x02\x02\x02\u0338\u032F\x03\x02\x02\x02" +
		"\u0338\u0334\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02\u0339\u0385\x03" +
		"\x02\x02\x02\u033A\u033B\f\x10\x02\x02\u033B\u033C\t\x07\x02\x02\u033C" +
		"\u0384\x05\x98M\x11\u033D\u033E\f\x0F\x02\x02\u033E\u033F\t\b\x02\x02" +
		"\u033F\u0384\x05\x98M\x10\u0340\u0348\f\x0E\x02\x02\u0341\u0342\x07L\x02" +
		"\x02\u0342\u0349\x07L\x02\x02\u0343\u0344\x07K\x02\x02\u0344\u0345\x07" +
		"K\x02\x02\u0345\u0349\x07K\x02\x02\u0346\u0347\x07K\x02\x02\u0347\u0349" +
		"\x07K\x02\x02\u0348\u0341\x03\x02\x02\x02\u0348\u0343\x03\x02\x02\x02" +
		"\u0348\u0346\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u0384\x05" +
		"\x98M\x0F\u034B\u034C\f\r\x02\x02\u034C\u034E\t\t\x02\x02\u034D\u034F" +
		"\x07J\x02\x02\u034E\u034D\x03\x02\x02\x02\u034E\u034F\x03\x02\x02\x02" +
		"\u034F\u0350\x03\x02\x02\x02\u0350\u0384\x05\x98M\x0E\u0351\u0352\f\v" +
		"\x02\x02\u0352\u0353\t\n\x02\x02\u0353\u0384\x05\x98M\f\u0354\u0355\f" +
		"\n\x02\x02\u0355\u0356\x07^\x02\x02\u0356\u0384\x05\x98M\v\u0357\u0358" +
		"\f\t\x02\x02\u0358\u0359\x07`\x02\x02\u0359\u0384\x05\x98M\n\u035A\u035B" +
		"\f\b\x02\x02\u035B\u035C\x07_\x02\x02\u035C\u0384\x05\x98M\t\u035D\u035E" +
		"\f\x07\x02\x02\u035E\u035F\x07V\x02\x02\u035F\u0384\x05\x98M\b\u0360\u0361" +
		"\f\x06\x02\x02\u0361\u0362\x07W\x02\x02\u0362\u0384\x05\x98M\x07\u0363" +
		"\u0364\f\x04\x02\x02\u0364\u0365\x07O\x02\x02\u0365\u0366\x05\x98M\x02" +
		"\u0366\u0367\x07P\x02\x02\u0367\u0368\x05\x98M\x04\u0368\u0384\x03\x02" +
		"\x02\x02\u0369\u036A\f\x03\x02\x02\u036A\u036B\t\v\x02\x02\u036B\u0384" +
		"\x05\x98M\x03\u036C\u036D\f\x18\x02\x02\u036D\u0370\x07I\x02\x02\u036E" +
		"\u0371\x05\x9EP\x02\u036F\u0371\x05\xB8]\x02\u0370\u036E\x03\x02\x02\x02" +
		"\u0370\u036F\x03\x02\x02\x02\u0371\u0384\x03\x02\x02\x02\u0372\u0373\f" +
		"\x17\x02\x02\u0373\u0374\x07E\x02\x02\u0374\u0375\x05\x98M\x02\u0375\u0376" +
		"\x07F\x02\x02\u0376\u0384\x03\x02\x02\x02\u0377\u0378\f\x13\x02\x02\u0378" +
		"\u0384\t\f\x02\x02\u0379\u037A\f\f\x02\x02\u037A\u037B\x07\x18\x02\x02" +
		"\u037B\u0384\x05.\x18\x02\u037C\u037F\f\x05\x02\x02\u037D\u037E\x07o\x02" +
		"\x02\u037E\u0380\x05\x98M\x02\u037F\u037D\x03\x02\x02\x02\u0380\u0381" +
		"\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02" +
		"\u0382\u0384\x03\x02\x02\x02\u0383\u033A\x03\x02\x02\x02\u0383\u033D\x03" +
		"\x02\x02\x02\u0383\u0340\x03\x02\x02\x02\u0383\u034B\x03\x02\x02\x02\u0383" +
		"\u0351\x03\x02\x02\x02\u0383\u0354\x03\x02\x02\x02\u0383\u0357\x03\x02" +
		"\x02\x02\u0383\u035A\x03\x02\x02\x02\u0383\u035D\x03\x02\x02\x02\u0383" +
		"\u0360\x03\x02\x02\x02\u0383\u0363\x03\x02\x02\x02\u0383\u0369\x03\x02" +
		"\x02\x02\u0383\u036C\x03\x02\x02\x02\u0383\u0372\x03\x02\x02\x02\u0383" +
		"\u0377\x03\x02\x02\x02\u0383\u0379\x03\x02\x02\x02\u0383\u037C\x03\x02" +
		"\x02\x02\u0384\u0387\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02\u0385" +
		"\u0386\x03\x02\x02\x02\u0386\x99\x03\x02\x02\x02\u0387\u0385\x03\x02\x02" +
		"\x02\u0388\u0389\x07A\x02\x02\u0389\u038A\x05\x98M\x02\u038A\u038B\x07" +
		"B\x02\x02\u038B\u0396\x03\x02\x02\x02\u038C\u0396\x07*\x02\x02\u038D\u0396" +
		"\x07\'\x02\x02\u038E\u0396\x05D#\x02\u038F\u0390\x05.\x18\x02\u0390\u0391" +
		"\x07I\x02\x02\u0391\u0392\x07\b\x02\x02\u0392\u0396\x03\x02\x02\x02\u0393" +
		"\u0396\x05\xB6\\\x02\u0394\u0396\x05\xB4[\x02\u0395\u0388\x03\x02\x02" +
		"\x02\u0395\u038C\x03\x02\x02\x02\u0395\u038D\x03\x02\x02\x02\u0395\u038E" +
		"\x03\x02\x02\x02\u0395\u038F\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02" +
		"\u0395\u0394\x03\x02\x02\x02\u0396\x9B\x03\x02\x02\x02\u0397\u0398\x05" +
		"\xB6\\\x02\u0398\u039A\x07A\x02\x02\u0399\u039B\x05\x96L\x02\u039A\u0399" +
		"\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02" +
		"\u039C\u039D\x07B\x02\x02\u039D\u03AB\x03\x02\x02\x02\u039E\u039F\x07" +
		"*\x02\x02\u039F\u03A1\x07A\x02\x02\u03A0\u03A2\x05\x96L\x02\u03A1\u03A0" +
		"\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02" +
		"\u03A3\u03AB\x07B\x02\x02\u03A4\u03A5\x07\'\x02\x02\u03A5\u03A7\x07A\x02" +
		"\x02\u03A6\u03A8\x05\x96L\x02\u03A7\u03A6\x03\x02\x02\x02\u03A7\u03A8" +
		"\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AB\x07B\x02\x02" +
		"\u03AA\u0397\x03\x02\x02\x02\u03AA\u039E\x03\x02\x02\x02\u03AA\u03A4\x03" +
		"\x02\x02\x02\u03AB\x9D\x03\x02\x02\x02\u03AC\u03AD\x05\xB8]\x02\u03AD" +
		"\u03AF\x07A\x02\x02\u03AE\u03B0\x05\x96L\x02\u03AF\u03AE\x03\x02\x02\x02" +
		"\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B2\x07" +
		"B\x02\x02\u03B2\x9F\x03\x02\x02\x02\u03B3\u03B9\x05\xA2R\x02\u03B4\u03BA" +
		"\x05\xA6T\x02\u03B5\u03BA\x05\xA8U\x02\u03B6\u03BA\x05\xAAV\x02\u03B7" +
		"\u03BA\x05\xACW\x02\u03B8\u03BA\x05\xB0Y\x02\u03B9\u03B4\x03\x02\x02\x02" +
		"\u03B9\u03B5\x03\x02\x02\x02\u03B9\u03B6\x03\x02\x02\x02\u03B9\u03B7\x03" +
		"\x02\x02\x02\u03B9\u03B8\x03\x02\x02\x02\u03BA\xA1\x03\x02\x02\x02\u03BB" +
		"\u03C0\x05\xA4S\x02\u03BC\u03BD\x07I\x02\x02\u03BD\u03BF\x05\xA4S\x02" +
		"\u03BE\u03BC\x03\x02\x02\x02\u03BF\u03C2\x03\x02\x02\x02\u03C0\u03BE\x03" +
		"\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\xA3\x03\x02\x02\x02\u03C2" +
		"\u03C0\x03\x02\x02\x02\u03C3\u03C8\x05\xB8]\x02\u03C4\u03C5\x07L\x02\x02" +
		"\u03C5\u03C6\x05\x12\n\x02\u03C6\u03C7\x07K\x02\x02\u03C7\u03C9\x03\x02" +
		"\x02\x02\u03C8\u03C4\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9" +
		"\xA5\x03\x02\x02\x02\u03CA\u03CB\x07C\x02\x02\u03CB\u03CC\x07D\x02\x02" +
		"\u03CC\xA7\x03\x02\x02\x02\u03CD\u03CE\x05\xB2Z\x02\u03CE\xA9\x03\x02" +
		"\x02\x02\u03CF\u03D0\x07E\x02\x02\u03D0\u03D1\x05\x98M\x02\u03D1\u03D2" +
		"\x07F\x02\x02\u03D2\u03D9\x03\x02\x02\x02\u03D3\u03D4\x07E\x02\x02\u03D4" +
		"\u03D6\x07F\x02\x02\u03D5\u03D7\x05,\x17\x02\u03D6\u03D5\x03\x02\x02\x02" +
		"\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D9\x03\x02\x02\x02\u03D8\u03CF\x03" +
		"\x02\x02\x02\u03D8\u03D3\x03\x02\x02\x02\u03D9\xAB\x03\x02\x02\x02\u03DA" +
		"\u03DB\x07C\x02\x02\u03DB\u03E0\x05\xAEX\x02\u03DC\u03DD\x07H\x02\x02" +
		"\u03DD\u03DF\x05\xAEX\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF\u03E2\x03" +
		"\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1" +
		"\u03E3\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E3\u03E4\x07D\x02" +
		"\x02\u03E4\xAD\x03\x02\x02\x02\u03E5\u03E6\x05\x98M\x02\u03E6\u03E7\x07" +
		"b\x02\x02\u03E7\u03E8\x05\x98M\x02\u03E8\xAF\x03\x02\x02\x02\u03E9\u03EA" +
		"\x07C\x02\x02\u03EA\u03EF\x05\x98M\x02\u03EB\u03EC\x07H\x02\x02\u03EC" +
		"\u03EE\x05\x98M\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03F1\x03\x02\x02" +
		"\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F2" +
		"\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2\u03F3\x07D\x02\x02" +
		"\u03F3\xB1\x03\x02\x02\x02\u03F4\u03F6\x07A\x02\x02\u03F5\u03F7\x05\x96" +
		"L\x02\u03F6\u03F5\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8" +
		"\x03\x02\x02\x02\u03F8\u03F9\x07B\x02\x02\u03F9\xB3\x03\x02\x02\x02\u03FA" +
		"\u03FF\x07E\x02\x02\u03FB\u03FE\x05\xB4[\x02\u03FC\u03FE\n\r\x02\x02\u03FD" +
		"\u03FB\x03\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03\x02" +
		"\x02\x02\u03FF\u0400\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u0400" +
		"\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0403\x07F\x02" +
		"\x02\u0403\xB5\x03\x02\x02\x02\u0404\u0405\t\x0E\x02\x02\u0405\xB7\x03" +
		"\x02\x02\x02\u0406\u0407\t\x0F\x02\x02\u0407\xB9\x03\x02\x02\x02g\xC4" +
		"\xD4\xDB\xE2\xE6\xEC\xF0\xF8\u0101\u0108\u0111\u0118\u0121\u0128\u012E" +
		"\u0132\u0147\u0150\u0154\u015A\u0164\u0170\u0178\u017D\u0188\u018E\u0196" +
		"\u019A\u019C\u01A5\u01AE\u01B3\u01B7\u01BB\u01BF\u01C1\u01CD\u01D3\u01DB" +
		"\u01E2\u01E8\u01F4\u01FC\u0203\u020D\u0210\u0214\u0219\u0223\u022B\u022E" +
		"\u0231\u0239\u0244\u025E\u0265\u026E\u027C\u0282\u0285\u028B\u02A2\u02A5" +
		"\u02A8\u02AC\u02CD\u02D9\u02E4\u02E9\u02EE\u02F3\u02FA\u0307\u030B\u030F" +
		"\u0311\u0315\u0327\u0338\u0348\u034E\u0370\u0381\u0383\u0385\u0395\u039A" +
		"\u03A1\u03A7\u03AA\u03AF\u03B9\u03C0\u03C8\u03D6\u03D8\u03E0\u03EF\u03F6" +
		"\u03FD\u03FF";
	public static readonly _serializedATN: string = Utils.join(
		[
			VertexParser._serializedATNSegment0,
			VertexParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VertexParser.__ATN) {
			VertexParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VertexParser._serializedATN));
		}

		return VertexParser.__ATN;
	}

}

export class TriggerUnitContext extends ParserRuleContext {
	public TRIGGER(): TerminalNode { return this.getToken(VertexParser.TRIGGER, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public ON(): TerminalNode { return this.getToken(VertexParser.ON, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public triggerCase(): TriggerCaseContext[];
	public triggerCase(i: number): TriggerCaseContext;
	public triggerCase(i?: number): TriggerCaseContext | TriggerCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TriggerCaseContext);
		} else {
			return this.getRuleContext(i, TriggerCaseContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(VertexParser.EOF, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_triggerUnit; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTriggerUnit) {
			listener.enterTriggerUnit(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTriggerUnit) {
			listener.exitTriggerUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTriggerUnit) {
			return visitor.visitTriggerUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerCaseContext extends ParserRuleContext {
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.BEFORE, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(VertexParser.AFTER, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INSERT, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.UPDATE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.DELETE, 0); }
	public UNDELETE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.UNDELETE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_triggerCase; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTriggerCase) {
			listener.enterTriggerCase(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTriggerCase) {
			listener.exitTriggerCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTriggerCase) {
			return visitor.visitTriggerCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public EOF(): TerminalNode { return this.getToken(VertexParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(VertexParser.CLASS, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(VertexParser.EXTENDS, 0); }
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(VertexParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(VertexParser.ENUM, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(VertexParser.INTERFACE, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(VertexParser.EXTENDS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeRef(): TypeRefContext[];
	public typeRef(i: number): TypeRefContext;
	public typeRef(i?: number): TypeRefContext | TypeRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeRefContext);
		} else {
			return this.getRuleContext(i, TypeRefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_typeList; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_classBody; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext[];
	public interfaceMethodDeclaration(i: number): InterfaceMethodDeclarationContext;
	public interfaceMethodDeclaration(i?: number): InterfaceMethodDeclarationContext | InterfaceMethodDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.GLOBAL, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(VertexParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.PRIVATE, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TRANSIENT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.FINAL, 0); }
	public WEBSERVICE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WEBSERVICE, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.OVERRIDE, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.VIRTUAL, 0); }
	public TESTMETHOD(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TESTMETHOD, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WITH, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SHARING, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WITHOUT, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INHERITED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_modifier; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public propertyDeclaration(): PropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(VertexParser.VOID, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public formalParametersWithOptional(): FormalParametersWithOptionalContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersWithOptionalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public propertyBlock(): PropertyBlockContext[];
	public propertyBlock(i: number): PropertyBlockContext;
	public propertyBlock(i?: number): PropertyBlockContext | PropertyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyBlockContext);
		} else {
			return this.getRuleContext(i, PropertyBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_propertyDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterPropertyDeclaration) {
			listener.enterPropertyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitPropertyDeclaration) {
			listener.exitPropertyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitPropertyDeclaration) {
			return visitor.visitPropertyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(VertexParser.VOID, 0); }
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_interfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeRefContext extends ParserRuleContext {
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	public arraySubscripts(): ArraySubscriptsContext {
		return this.getRuleContext(0, ArraySubscriptsContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.DOT);
		} else {
			return this.getToken(VertexParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_typeRef; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTypeRef) {
			listener.enterTypeRef(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTypeRef) {
			listener.exitTypeRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTypeRef) {
			return visitor.visitTypeRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArraySubscriptsContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.LBRACK);
		} else {
			return this.getToken(VertexParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.RBRACK);
		} else {
			return this.getToken(VertexParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_arraySubscripts; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterArraySubscripts) {
			listener.enterArraySubscripts(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitArraySubscripts) {
			listener.exitArraySubscripts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitArraySubscripts) {
			return visitor.visitArraySubscripts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public LIST(): TerminalNode | undefined { return this.tryGetToken(VertexParser.LIST, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SET, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(VertexParser.MAP, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_typeName; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(VertexParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(VertexParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_formalParameters; }
	public copyFrom(ctx: FormalParametersContext): void {
		super.copyFrom(ctx);
	}
}
export class FormalParametersEmptyContext extends FormalParametersContext {
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	constructor(ctx: FormalParametersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterFormalParametersEmpty) {
			listener.enterFormalParametersEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitFormalParametersEmpty) {
			listener.exitFormalParametersEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitFormalParametersEmpty) {
			return visitor.visitFormalParametersEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FormalParametersPositionalContext extends FormalParametersContext {
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	constructor(ctx: FormalParametersContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterFormalParametersPositional) {
			listener.enterFormalParametersPositional(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitFormalParametersPositional) {
			listener.exitFormalParametersPositional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitFormalParametersPositional) {
			return visitor.visitFormalParametersPositional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersWithOptionalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_formalParametersWithOptional; }
	public copyFrom(ctx: FormalParametersWithOptionalContext): void {
		super.copyFrom(ctx);
	}
}
export class FormalParametersPositionalWithOptionalContext extends FormalParametersWithOptionalContext {
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public formalParameterList(): FormalParameterListContext {
		return this.getRuleContext(0, FormalParameterListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(VertexParser.COMMA, 0); }
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext | undefined {
		return this.tryGetRuleContext(0, OptionalPositionalFormalParametersContext);
	}
	constructor(ctx: FormalParametersWithOptionalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterFormalParametersPositionalWithOptional) {
			listener.enterFormalParametersPositionalWithOptional(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitFormalParametersPositionalWithOptional) {
			listener.exitFormalParametersPositionalWithOptional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitFormalParametersPositionalWithOptional) {
			return visitor.visitFormalParametersPositionalWithOptional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FormalParametersOptionalContext extends FormalParametersWithOptionalContext {
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public optionalPositionalFormalParameters(): OptionalPositionalFormalParametersContext {
		return this.getRuleContext(0, OptionalPositionalFormalParametersContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	constructor(ctx: FormalParametersWithOptionalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterFormalParametersOptional) {
			listener.enterFormalParametersOptional(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitFormalParametersOptional) {
			listener.exitFormalParametersOptional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitFormalParametersOptional) {
			return visitor.visitFormalParametersOptional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalPositionalFormalParametersContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(VertexParser.LBRACK, 0); }
	public defaultFormalParameter(): DefaultFormalParameterContext[];
	public defaultFormalParameter(i: number): DefaultFormalParameterContext;
	public defaultFormalParameter(i?: number): DefaultFormalParameterContext | DefaultFormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefaultFormalParameterContext);
		} else {
			return this.getRuleContext(i, DefaultFormalParameterContext);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(VertexParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_optionalPositionalFormalParameters; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterOptionalPositionalFormalParameters) {
			listener.enterOptionalPositionalFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitOptionalPositionalFormalParameters) {
			listener.exitOptionalPositionalFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitOptionalPositionalFormalParameters) {
			return visitor.visitOptionalPositionalFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultFormalParameterContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext {
		return this.getRuleContext(0, FormalParameterContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_defaultFormalParameter; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterDefaultFormalParameter) {
			listener.enterDefaultFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitDefaultFormalParameter) {
			listener.exitDefaultFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitDefaultFormalParameter) {
			return visitor.visitDefaultFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.DOT);
		} else {
			return this.getToken(VertexParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(VertexParser.IntegerLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(VertexParser.NumberLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(VertexParser.StringLiteral, 0); }
	public StringTemplateLiteral(): TerminalNode | undefined { return this.tryGetToken(VertexParser.StringTemplateLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(VertexParser.BooleanLiteral, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_literal; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(VertexParser.AT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.RPAREN, 0); }
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_annotation; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(VertexParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_block; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_localVariableDeclarationStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterLocalVariableDeclarationStatement) {
			listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitLocalVariableDeclarationStatement) {
			listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public insertStatement(): InsertStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertStatementContext);
	}
	public updateStatement(): UpdateStatementContext | undefined {
		return this.tryGetRuleContext(0, UpdateStatementContext);
	}
	public deleteStatement(): DeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, DeleteStatementContext);
	}
	public undeleteStatement(): UndeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, UndeleteStatementContext);
	}
	public upsertStatement(): UpsertStatementContext | undefined {
		return this.tryGetRuleContext(0, UpsertStatementContext);
	}
	public mergeStatement(): MergeStatementContext | undefined {
		return this.tryGetRuleContext(0, MergeStatementContext);
	}
	public runAsStatement(): RunAsStatementContext | undefined {
		return this.tryGetRuleContext(0, RunAsStatementContext);
	}
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_statement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(VertexParser.IF, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(VertexParser.SWITCH, 0); }
	public ON(): TerminalNode { return this.getToken(VertexParser.ON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public whenControl(): WhenControlContext[];
	public whenControl(i: number): WhenControlContext;
	public whenControl(i?: number): WhenControlContext | WhenControlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenControlContext);
		} else {
			return this.getRuleContext(i, WhenControlContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenControlContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(VertexParser.WHEN, 0); }
	public whenValue(): WhenValueContext {
		return this.getRuleContext(0, WhenValueContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_whenControl; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterWhenControl) {
			listener.enterWhenControl(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitWhenControl) {
			listener.exitWhenControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitWhenControl) {
			return visitor.visitWhenControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenValueContext extends ParserRuleContext {
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ELSE, 0); }
	public whenLiteral(): WhenLiteralContext[];
	public whenLiteral(i: number): WhenLiteralContext;
	public whenLiteral(i?: number): WhenLiteralContext | WhenLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenLiteralContext);
		} else {
			return this.getRuleContext(i, WhenLiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_whenValue; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterWhenValue) {
			listener.enterWhenValue(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitWhenValue) {
			listener.exitWhenValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitWhenValue) {
			return visitor.visitWhenValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenLiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(VertexParser.IntegerLiteral, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SUB, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(VertexParser.StringLiteral, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.NULL, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_whenLiteral; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterWhenLiteral) {
			listener.enterWhenLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitWhenLiteral) {
			listener.exitWhenLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitWhenLiteral) {
			return visitor.visitWhenLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(VertexParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public forControl(): ForControlContext {
		return this.getRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(VertexParser.WHILE, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(VertexParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(VertexParser.WHILE, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(VertexParser.TRY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(VertexParser.RETURN, 0); }
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(VertexParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(VertexParser.BREAK, 0); }
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(VertexParser.CONTINUE, 0); }
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertStatementContext extends ParserRuleContext {
	public INSERT(): TerminalNode { return this.getToken(VertexParser.INSERT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_insertStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterInsertStatement) {
			listener.enterInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitInsertStatement) {
			listener.exitInsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitInsertStatement) {
			return visitor.visitInsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateStatementContext extends ParserRuleContext {
	public UPDATE(): TerminalNode { return this.getToken(VertexParser.UPDATE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_updateStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterUpdateStatement) {
			listener.enterUpdateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitUpdateStatement) {
			listener.exitUpdateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitUpdateStatement) {
			return visitor.visitUpdateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteStatementContext extends ParserRuleContext {
	public DELETE(): TerminalNode { return this.getToken(VertexParser.DELETE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_deleteStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterDeleteStatement) {
			listener.enterDeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitDeleteStatement) {
			listener.exitDeleteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitDeleteStatement) {
			return visitor.visitDeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UndeleteStatementContext extends ParserRuleContext {
	public UNDELETE(): TerminalNode { return this.getToken(VertexParser.UNDELETE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_undeleteStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterUndeleteStatement) {
			listener.enterUndeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitUndeleteStatement) {
			listener.exitUndeleteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitUndeleteStatement) {
			return visitor.visitUndeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpsertStatementContext extends ParserRuleContext {
	public UPSERT(): TerminalNode { return this.getToken(VertexParser.UPSERT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_upsertStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterUpsertStatement) {
			listener.enterUpsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitUpsertStatement) {
			listener.exitUpsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitUpsertStatement) {
			return visitor.visitUpsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MergeStatementContext extends ParserRuleContext {
	public MERGE(): TerminalNode { return this.getToken(VertexParser.MERGE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_mergeStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterMergeStatement) {
			listener.enterMergeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitMergeStatement) {
			listener.exitMergeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitMergeStatement) {
			return visitor.visitMergeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RunAsStatementContext extends ParserRuleContext {
	public SYSTEMRUNAS(): TerminalNode { return this.getToken(VertexParser.SYSTEMRUNAS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_runAsStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterRunAsStatement) {
			listener.enterRunAsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitRunAsStatement) {
			listener.exitRunAsStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitRunAsStatement) {
			return visitor.visitRunAsStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(VertexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyBlockContext extends ParserRuleContext {
	public getter(): GetterContext | undefined {
		return this.tryGetRuleContext(0, GetterContext);
	}
	public setter(): SetterContext | undefined {
		return this.tryGetRuleContext(0, SetterContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_propertyBlock; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterPropertyBlock) {
			listener.enterPropertyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitPropertyBlock) {
			listener.exitPropertyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitPropertyBlock) {
			return visitor.visitPropertyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(VertexParser.GET, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_getter; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterGetter) {
			listener.enterGetter(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitGetter) {
			listener.exitGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(VertexParser.SET, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_setter; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterSetter) {
			listener.enterSetter(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitSetter) {
			listener.exitSetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(VertexParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(VertexParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.SEMI);
		} else {
			return this.getToken(VertexParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_forControl; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_forInit; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode { return this.getToken(VertexParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryExpressionContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(VertexParser.DOT, 0); }
	public dotMethodCall(): DotMethodCallContext | undefined {
		return this.tryGetRuleContext(0, DotMethodCallContext);
	}
	public anyId(): AnyIdContext | undefined {
		return this.tryGetRuleContext(0, AnyIdContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterDotExpression) {
			listener.enterDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitDotExpression) {
			listener.exitDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitDotExpression) {
			return visitor.visitDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBRACK(): TerminalNode { return this.getToken(VertexParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(VertexParser.RBRACK, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MethodCallExpressionContext extends ExpressionContext {
	public methodCall(): MethodCallContext {
		return this.getRuleContext(0, MethodCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterMethodCallExpression) {
			listener.enterMethodCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitMethodCallExpression) {
			listener.exitMethodCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitMethodCallExpression) {
			return visitor.visitMethodCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends ExpressionContext {
	public NEW(): TerminalNode { return this.getToken(VertexParser.NEW, 0); }
	public creator(): CreatorContext {
		return this.getRuleContext(0, CreatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostOpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.DEC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterPostOpExpression) {
			listener.enterPostOpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitPostOpExpression) {
			listener.exitPostOpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitPostOpExpression) {
			return visitor.visitPostOpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreOpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SUB, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.DEC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterPreOpExpression) {
			listener.enterPreOpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitPreOpExpression) {
			listener.exitPreOpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitPreOpExpression) {
			return visitor.visitPreOpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(VertexParser.BANG, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterNegExpression) {
			listener.enterNegExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitNegExpression) {
			listener.exitNegExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitNegExpression) {
			return visitor.visitNegExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Arth1ExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(VertexParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(VertexParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterArth1Expression) {
			listener.enterArth1Expression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitArth1Expression) {
			listener.exitArth1Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitArth1Expression) {
			return visitor.visitArth1Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Arth2ExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterArth2Expression) {
			listener.enterArth2Expression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitArth2Expression) {
			listener.exitArth2Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitArth2Expression) {
			return visitor.visitArth2Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.LT);
		} else {
			return this.getToken(VertexParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.GT);
		} else {
			return this.getToken(VertexParser.GT, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterBitExpression) {
			listener.enterBitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitBitExpression) {
			listener.exitBitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitBitExpression) {
			return visitor.visitBitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.LT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterCmpExpression) {
			listener.enterCmpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitCmpExpression) {
			listener.exitCmpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitCmpExpression) {
			return visitor.visitCmpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceOfExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INSTANCEOF(): TerminalNode { return this.getToken(VertexParser.INSTANCEOF, 0); }
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterInstanceOfExpression) {
			listener.enterInstanceOfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitInstanceOfExpression) {
			listener.exitInstanceOfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitInstanceOfExpression) {
			return visitor.visitInstanceOfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TRIPLEEQUAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TRIPLEEQUAL, 0); }
	public TRIPLENOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TRIPLENOTEQUAL, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.NOTEQUAL, 0); }
	public LESSANDGREATER(): TerminalNode | undefined { return this.tryGetToken(VertexParser.LESSANDGREATER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BITAND(): TerminalNode { return this.getToken(VertexParser.BITAND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CARET(): TerminalNode { return this.getToken(VertexParser.CARET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BITOR(): TerminalNode { return this.getToken(VertexParser.BITOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogAndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(VertexParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterLogAndExpression) {
			listener.enterLogAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitLogAndExpression) {
			listener.exitLogAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitLogAndExpression) {
			return visitor.visitLogAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogOrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(VertexParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterLogOrExpression) {
			listener.enterLogOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitLogOrExpression) {
			listener.exitLogOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitLogOrExpression) {
			return visitor.visitLogOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullCoalesceExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NULL_COALESCE(): TerminalNode[];
	public NULL_COALESCE(i: number): TerminalNode;
	public NULL_COALESCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.NULL_COALESCE);
		} else {
			return this.getToken(VertexParser.NULL_COALESCE, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterNullCoalesceExpression) {
			listener.enterNullCoalesceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitNullCoalesceExpression) {
			listener.exitNullCoalesceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitNullCoalesceExpression) {
			return visitor.visitNullCoalesceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CondExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public QUESTION(): TerminalNode { return this.getToken(VertexParser.QUESTION, 0); }
	public COLON(): TerminalNode { return this.getToken(VertexParser.COLON, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterCondExpression) {
			listener.enterCondExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitCondExpression) {
			listener.exitCondExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitCondExpression) {
			return visitor.visitCondExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.MOD_ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterAssignExpression) {
			listener.enterAssignExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitAssignExpression) {
			listener.exitAssignExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitAssignExpression) {
			return visitor.visitAssignExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_primary; }
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class SubPrimaryContext extends PrimaryContext {
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterSubPrimary) {
			listener.enterSubPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitSubPrimary) {
			listener.exitSubPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitSubPrimary) {
			return visitor.visitSubPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisPrimaryContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(VertexParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterThisPrimary) {
			listener.enterThisPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitThisPrimary) {
			listener.exitThisPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitThisPrimary) {
			return visitor.visitThisPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperPrimaryContext extends PrimaryContext {
	public SUPER(): TerminalNode { return this.getToken(VertexParser.SUPER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterSuperPrimary) {
			listener.enterSuperPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitSuperPrimary) {
			listener.exitSuperPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitSuperPrimary) {
			return visitor.visitSuperPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralPrimaryContext extends PrimaryContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterLiteralPrimary) {
			listener.enterLiteralPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitLiteralPrimary) {
			listener.exitLiteralPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitLiteralPrimary) {
			return visitor.visitLiteralPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRefPrimaryContext extends PrimaryContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public DOT(): TerminalNode { return this.getToken(VertexParser.DOT, 0); }
	public CLASS(): TerminalNode { return this.getToken(VertexParser.CLASS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterTypeRefPrimary) {
			listener.enterTypeRefPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitTypeRefPrimary) {
			listener.exitTypeRefPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitTypeRefPrimary) {
			return visitor.visitTypeRefPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdPrimaryContext extends PrimaryContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterIdPrimary) {
			listener.enterIdPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitIdPrimary) {
			listener.exitIdPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitIdPrimary) {
			return visitor.visitIdPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SoqlPrimaryContext extends PrimaryContext {
	public soqlLiteral(): SoqlLiteralContext {
		return this.getRuleContext(0, SoqlLiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterSoqlPrimary) {
			listener.enterSoqlPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitSoqlPrimary) {
			listener.exitSoqlPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitSoqlPrimary) {
			return visitor.visitSoqlPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(VertexParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DotMethodCallContext extends ParserRuleContext {
	public anyId(): AnyIdContext {
		return this.getRuleContext(0, AnyIdContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_dotMethodCall; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterDotMethodCall) {
			listener.enterDotMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitDotMethodCall) {
			listener.exitDotMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitDotMethodCall) {
			return visitor.visitDotMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public noRest(): NoRestContext | undefined {
		return this.tryGetRuleContext(0, NoRestContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	public mapCreatorRest(): MapCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, MapCreatorRestContext);
	}
	public setCreatorRest(): SetCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, SetCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_creator; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public idCreatedNamePair(): IdCreatedNamePairContext[];
	public idCreatedNamePair(i: number): IdCreatedNamePairContext;
	public idCreatedNamePair(i?: number): IdCreatedNamePairContext | IdCreatedNamePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdCreatedNamePairContext);
		} else {
			return this.getRuleContext(i, IdCreatedNamePairContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.DOT);
		} else {
			return this.getToken(VertexParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_createdName; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdCreatedNamePairContext extends ParserRuleContext {
	public anyId(): AnyIdContext {
		return this.getRuleContext(0, AnyIdContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.LT, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_idCreatedNamePair; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterIdCreatedNamePair) {
			listener.enterIdCreatedNamePair(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitIdCreatedNamePair) {
			listener.exitIdCreatedNamePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitIdCreatedNamePair) {
			return visitor.visitIdCreatedNamePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_noRest; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterNoRest) {
			listener.enterNoRest(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitNoRest) {
			listener.exitNoRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitNoRest) {
			return visitor.visitNoRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(VertexParser.LBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(VertexParser.RBRACK, 0); }
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapCreatorRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public mapCreatorRestPair(): MapCreatorRestPairContext[];
	public mapCreatorRestPair(i: number): MapCreatorRestPairContext;
	public mapCreatorRestPair(i?: number): MapCreatorRestPairContext | MapCreatorRestPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapCreatorRestPairContext);
		} else {
			return this.getRuleContext(i, MapCreatorRestPairContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_mapCreatorRest; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterMapCreatorRest) {
			listener.enterMapCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitMapCreatorRest) {
			listener.exitMapCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitMapCreatorRest) {
			return visitor.visitMapCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapCreatorRestPairContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MAPTO(): TerminalNode { return this.getToken(VertexParser.MAPTO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_mapCreatorRestPair; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterMapCreatorRestPair) {
			listener.enterMapCreatorRestPair(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitMapCreatorRestPair) {
			listener.exitMapCreatorRestPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitMapCreatorRestPair) {
			return visitor.visitMapCreatorRestPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetCreatorRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(VertexParser.LBRACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(VertexParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.COMMA);
		} else {
			return this.getToken(VertexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_setCreatorRest; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterSetCreatorRest) {
			listener.enterSetCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitSetCreatorRest) {
			listener.exitSetCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitSetCreatorRest) {
			return visitor.visitSetCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(VertexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VertexParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_arguments; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoqlLiteralContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(VertexParser.LBRACK, 0); }
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VertexParser.RBRACK);
		} else {
			return this.getToken(VertexParser.RBRACK, i);
		}
	}
	public soqlLiteral(): SoqlLiteralContext[];
	public soqlLiteral(i: number): SoqlLiteralContext;
	public soqlLiteral(i?: number): SoqlLiteralContext | SoqlLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoqlLiteralContext);
		} else {
			return this.getRuleContext(i, SoqlLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_soqlLiteral; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterSoqlLiteral) {
			listener.enterSoqlLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitSoqlLiteral) {
			listener.exitSoqlLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitSoqlLiteral) {
			return visitor.visitSoqlLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(VertexParser.Identifier, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(VertexParser.AFTER, 0); }
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.BEFORE, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(VertexParser.GET, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INHERITED, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INSTANCEOF, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SET, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SHARING, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SWITCH, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TRANSIENT, 0); }
	public TRIGGER(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TRIGGER, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WHEN, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WITH, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WITHOUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_id; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnyIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(VertexParser.Identifier, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ABSTRACT, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(VertexParser.AFTER, 0); }
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.BEFORE, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(VertexParser.BREAK, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(VertexParser.CATCH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(VertexParser.CLASS, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.CONTINUE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.DELETE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(VertexParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ENUM, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(VertexParser.EXTENDS, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.FINAL, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(VertexParser.FINALLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(VertexParser.FOR, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(VertexParser.GET, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.GLOBAL, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(VertexParser.IF, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(VertexParser.IMPLEMENTS, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INHERITED, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INSERT, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INSTANCEOF, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.INTERFACE, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(VertexParser.LIST, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(VertexParser.MAP, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.MERGE, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(VertexParser.NEW, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.NULL, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(VertexParser.ON, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.OVERRIDE, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.PRIVATE, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(VertexParser.PROTECTED, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.PUBLIC, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.RETURN, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SET, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SHARING, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VertexParser.STATIC, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SUPER, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(VertexParser.SWITCH, 0); }
	public TESTMETHOD(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TESTMETHOD, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(VertexParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(VertexParser.THROW, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TRANSIENT, 0); }
	public TRIGGER(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TRIGGER, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(VertexParser.TRY, 0); }
	public UNDELETE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.UNDELETE, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.UPDATE, 0); }
	public UPSERT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.UPSERT, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(VertexParser.VIRTUAL, 0); }
	public WEBSERVICE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WEBSERVICE, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WHEN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WHILE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WITH, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(VertexParser.WITHOUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VertexParser.RULE_anyId; }
	// @Override
	public enterRule(listener: VertexParserListener): void {
		if (listener.enterAnyId) {
			listener.enterAnyId(this);
		}
	}
	// @Override
	public exitRule(listener: VertexParserListener): void {
		if (listener.exitAnyId) {
			listener.exitAnyId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VertexParserVisitor<Result>): Result {
		if (visitor.visitAnyId) {
			return visitor.visitAnyId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


