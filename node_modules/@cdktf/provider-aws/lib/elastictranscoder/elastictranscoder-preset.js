"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElastictranscoderPreset = exports.elastictranscoderPresetVideoWatermarksToTerraform = exports.ElastictranscoderPresetVideoOutputReference = exports.elastictranscoderPresetVideoToTerraform = exports.ElastictranscoderPresetThumbnailsOutputReference = exports.elastictranscoderPresetThumbnailsToTerraform = exports.ElastictranscoderPresetAudioCodecOptionsOutputReference = exports.elastictranscoderPresetAudioCodecOptionsToTerraform = exports.ElastictranscoderPresetAudioOutputReference = exports.elastictranscoderPresetAudioToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function elastictranscoderPresetAudioToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        audio_packing_mode: cdktf.stringToTerraform(struct.audioPackingMode),
        bit_rate: cdktf.stringToTerraform(struct.bitRate),
        channels: cdktf.stringToTerraform(struct.channels),
        codec: cdktf.stringToTerraform(struct.codec),
        sample_rate: cdktf.stringToTerraform(struct.sampleRate),
    };
}
exports.elastictranscoderPresetAudioToTerraform = elastictranscoderPresetAudioToTerraform;
/**
 * @stability stable
 */
class ElastictranscoderPresetAudioOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._audioPackingMode) {
            hasAnyValues = true;
            internalValueResult.audioPackingMode = this._audioPackingMode;
        }
        if (this._bitRate) {
            hasAnyValues = true;
            internalValueResult.bitRate = this._bitRate;
        }
        if (this._channels) {
            hasAnyValues = true;
            internalValueResult.channels = this._channels;
        }
        if (this._codec) {
            hasAnyValues = true;
            internalValueResult.codec = this._codec;
        }
        if (this._sampleRate) {
            hasAnyValues = true;
            internalValueResult.sampleRate = this._sampleRate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._audioPackingMode = undefined;
            this._bitRate = undefined;
            this._channels = undefined;
            this._codec = undefined;
            this._sampleRate = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._audioPackingMode = value.audioPackingMode;
            this._bitRate = value.bitRate;
            this._channels = value.channels;
            this._codec = value.codec;
            this._sampleRate = value.sampleRate;
        }
    }
    /**
     * @stability stable
     */
    get audioPackingMode() {
        return this.getStringAttribute('audio_packing_mode');
    }
    /**
     * @stability stable
     */
    set audioPackingMode(value) {
        this._audioPackingMode = value;
    }
    /**
     * @stability stable
     */
    resetAudioPackingMode() {
        this._audioPackingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get audioPackingModeInput() {
        return this._audioPackingMode;
    }
    /**
     * @stability stable
     */
    get bitRate() {
        return this.getStringAttribute('bit_rate');
    }
    /**
     * @stability stable
     */
    set bitRate(value) {
        this._bitRate = value;
    }
    /**
     * @stability stable
     */
    resetBitRate() {
        this._bitRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bitRateInput() {
        return this._bitRate;
    }
    /**
     * @stability stable
     */
    get channels() {
        return this.getStringAttribute('channels');
    }
    /**
     * @stability stable
     */
    set channels(value) {
        this._channels = value;
    }
    /**
     * @stability stable
     */
    resetChannels() {
        this._channels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get channelsInput() {
        return this._channels;
    }
    /**
     * @stability stable
     */
    get codec() {
        return this.getStringAttribute('codec');
    }
    /**
     * @stability stable
     */
    set codec(value) {
        this._codec = value;
    }
    /**
     * @stability stable
     */
    resetCodec() {
        this._codec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codecInput() {
        return this._codec;
    }
    /**
     * @stability stable
     */
    get sampleRate() {
        return this.getStringAttribute('sample_rate');
    }
    /**
     * @stability stable
     */
    set sampleRate(value) {
        this._sampleRate = value;
    }
    /**
     * @stability stable
     */
    resetSampleRate() {
        this._sampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sampleRateInput() {
        return this._sampleRate;
    }
}
exports.ElastictranscoderPresetAudioOutputReference = ElastictranscoderPresetAudioOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetAudioOutputReference[_a] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPresetAudioOutputReference", version: "3.0.1" };
function elastictranscoderPresetAudioCodecOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bit_depth: cdktf.stringToTerraform(struct.bitDepth),
        bit_order: cdktf.stringToTerraform(struct.bitOrder),
        profile: cdktf.stringToTerraform(struct.profile),
        signed: cdktf.stringToTerraform(struct.signed),
    };
}
exports.elastictranscoderPresetAudioCodecOptionsToTerraform = elastictranscoderPresetAudioCodecOptionsToTerraform;
/**
 * @stability stable
 */
class ElastictranscoderPresetAudioCodecOptionsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bitDepth) {
            hasAnyValues = true;
            internalValueResult.bitDepth = this._bitDepth;
        }
        if (this._bitOrder) {
            hasAnyValues = true;
            internalValueResult.bitOrder = this._bitOrder;
        }
        if (this._profile) {
            hasAnyValues = true;
            internalValueResult.profile = this._profile;
        }
        if (this._signed) {
            hasAnyValues = true;
            internalValueResult.signed = this._signed;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bitDepth = undefined;
            this._bitOrder = undefined;
            this._profile = undefined;
            this._signed = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bitDepth = value.bitDepth;
            this._bitOrder = value.bitOrder;
            this._profile = value.profile;
            this._signed = value.signed;
        }
    }
    /**
     * @stability stable
     */
    get bitDepth() {
        return this.getStringAttribute('bit_depth');
    }
    /**
     * @stability stable
     */
    set bitDepth(value) {
        this._bitDepth = value;
    }
    /**
     * @stability stable
     */
    resetBitDepth() {
        this._bitDepth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bitDepthInput() {
        return this._bitDepth;
    }
    /**
     * @stability stable
     */
    get bitOrder() {
        return this.getStringAttribute('bit_order');
    }
    /**
     * @stability stable
     */
    set bitOrder(value) {
        this._bitOrder = value;
    }
    /**
     * @stability stable
     */
    resetBitOrder() {
        this._bitOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bitOrderInput() {
        return this._bitOrder;
    }
    /**
     * @stability stable
     */
    get profile() {
        return this.getStringAttribute('profile');
    }
    /**
     * @stability stable
     */
    set profile(value) {
        this._profile = value;
    }
    /**
     * @stability stable
     */
    resetProfile() {
        this._profile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get profileInput() {
        return this._profile;
    }
    /**
     * @stability stable
     */
    get signed() {
        return this.getStringAttribute('signed');
    }
    /**
     * @stability stable
     */
    set signed(value) {
        this._signed = value;
    }
    /**
     * @stability stable
     */
    resetSigned() {
        this._signed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get signedInput() {
        return this._signed;
    }
}
exports.ElastictranscoderPresetAudioCodecOptionsOutputReference = ElastictranscoderPresetAudioCodecOptionsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetAudioCodecOptionsOutputReference[_b] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPresetAudioCodecOptionsOutputReference", version: "3.0.1" };
function elastictranscoderPresetThumbnailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aspect_ratio: cdktf.stringToTerraform(struct.aspectRatio),
        format: cdktf.stringToTerraform(struct.format),
        interval: cdktf.stringToTerraform(struct.interval),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        padding_policy: cdktf.stringToTerraform(struct.paddingPolicy),
        resolution: cdktf.stringToTerraform(struct.resolution),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy),
    };
}
exports.elastictranscoderPresetThumbnailsToTerraform = elastictranscoderPresetThumbnailsToTerraform;
/**
 * @stability stable
 */
class ElastictranscoderPresetThumbnailsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._aspectRatio) {
            hasAnyValues = true;
            internalValueResult.aspectRatio = this._aspectRatio;
        }
        if (this._format) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._interval) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._maxHeight) {
            hasAnyValues = true;
            internalValueResult.maxHeight = this._maxHeight;
        }
        if (this._maxWidth) {
            hasAnyValues = true;
            internalValueResult.maxWidth = this._maxWidth;
        }
        if (this._paddingPolicy) {
            hasAnyValues = true;
            internalValueResult.paddingPolicy = this._paddingPolicy;
        }
        if (this._resolution) {
            hasAnyValues = true;
            internalValueResult.resolution = this._resolution;
        }
        if (this._sizingPolicy) {
            hasAnyValues = true;
            internalValueResult.sizingPolicy = this._sizingPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._aspectRatio = undefined;
            this._format = undefined;
            this._interval = undefined;
            this._maxHeight = undefined;
            this._maxWidth = undefined;
            this._paddingPolicy = undefined;
            this._resolution = undefined;
            this._sizingPolicy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._aspectRatio = value.aspectRatio;
            this._format = value.format;
            this._interval = value.interval;
            this._maxHeight = value.maxHeight;
            this._maxWidth = value.maxWidth;
            this._paddingPolicy = value.paddingPolicy;
            this._resolution = value.resolution;
            this._sizingPolicy = value.sizingPolicy;
        }
    }
    /**
     * @stability stable
     */
    get aspectRatio() {
        return this.getStringAttribute('aspect_ratio');
    }
    /**
     * @stability stable
     */
    set aspectRatio(value) {
        this._aspectRatio = value;
    }
    /**
     * @stability stable
     */
    resetAspectRatio() {
        this._aspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get aspectRatioInput() {
        return this._aspectRatio;
    }
    /**
     * @stability stable
     */
    get format() {
        return this.getStringAttribute('format');
    }
    /**
     * @stability stable
     */
    set format(value) {
        this._format = value;
    }
    /**
     * @stability stable
     */
    resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get formatInput() {
        return this._format;
    }
    /**
     * @stability stable
     */
    get interval() {
        return this.getStringAttribute('interval');
    }
    /**
     * @stability stable
     */
    set interval(value) {
        this._interval = value;
    }
    /**
     * @stability stable
     */
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalInput() {
        return this._interval;
    }
    /**
     * @stability stable
     */
    get maxHeight() {
        return this.getStringAttribute('max_height');
    }
    /**
     * @stability stable
     */
    set maxHeight(value) {
        this._maxHeight = value;
    }
    /**
     * @stability stable
     */
    resetMaxHeight() {
        this._maxHeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxHeightInput() {
        return this._maxHeight;
    }
    /**
     * @stability stable
     */
    get maxWidth() {
        return this.getStringAttribute('max_width');
    }
    /**
     * @stability stable
     */
    set maxWidth(value) {
        this._maxWidth = value;
    }
    /**
     * @stability stable
     */
    resetMaxWidth() {
        this._maxWidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxWidthInput() {
        return this._maxWidth;
    }
    /**
     * @stability stable
     */
    get paddingPolicy() {
        return this.getStringAttribute('padding_policy');
    }
    /**
     * @stability stable
     */
    set paddingPolicy(value) {
        this._paddingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetPaddingPolicy() {
        this._paddingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get paddingPolicyInput() {
        return this._paddingPolicy;
    }
    /**
     * @stability stable
     */
    get resolution() {
        return this.getStringAttribute('resolution');
    }
    /**
     * @stability stable
     */
    set resolution(value) {
        this._resolution = value;
    }
    /**
     * @stability stable
     */
    resetResolution() {
        this._resolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resolutionInput() {
        return this._resolution;
    }
    /**
     * @stability stable
     */
    get sizingPolicy() {
        return this.getStringAttribute('sizing_policy');
    }
    /**
     * @stability stable
     */
    set sizingPolicy(value) {
        this._sizingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetSizingPolicy() {
        this._sizingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sizingPolicyInput() {
        return this._sizingPolicy;
    }
}
exports.ElastictranscoderPresetThumbnailsOutputReference = ElastictranscoderPresetThumbnailsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetThumbnailsOutputReference[_c] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPresetThumbnailsOutputReference", version: "3.0.1" };
function elastictranscoderPresetVideoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aspect_ratio: cdktf.stringToTerraform(struct.aspectRatio),
        bit_rate: cdktf.stringToTerraform(struct.bitRate),
        codec: cdktf.stringToTerraform(struct.codec),
        display_aspect_ratio: cdktf.stringToTerraform(struct.displayAspectRatio),
        fixed_gop: cdktf.stringToTerraform(struct.fixedGop),
        frame_rate: cdktf.stringToTerraform(struct.frameRate),
        keyframes_max_dist: cdktf.stringToTerraform(struct.keyframesMaxDist),
        max_frame_rate: cdktf.stringToTerraform(struct.maxFrameRate),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        padding_policy: cdktf.stringToTerraform(struct.paddingPolicy),
        resolution: cdktf.stringToTerraform(struct.resolution),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy),
    };
}
exports.elastictranscoderPresetVideoToTerraform = elastictranscoderPresetVideoToTerraform;
/**
 * @stability stable
 */
class ElastictranscoderPresetVideoOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._aspectRatio) {
            hasAnyValues = true;
            internalValueResult.aspectRatio = this._aspectRatio;
        }
        if (this._bitRate) {
            hasAnyValues = true;
            internalValueResult.bitRate = this._bitRate;
        }
        if (this._codec) {
            hasAnyValues = true;
            internalValueResult.codec = this._codec;
        }
        if (this._displayAspectRatio) {
            hasAnyValues = true;
            internalValueResult.displayAspectRatio = this._displayAspectRatio;
        }
        if (this._fixedGop) {
            hasAnyValues = true;
            internalValueResult.fixedGop = this._fixedGop;
        }
        if (this._frameRate) {
            hasAnyValues = true;
            internalValueResult.frameRate = this._frameRate;
        }
        if (this._keyframesMaxDist) {
            hasAnyValues = true;
            internalValueResult.keyframesMaxDist = this._keyframesMaxDist;
        }
        if (this._maxFrameRate) {
            hasAnyValues = true;
            internalValueResult.maxFrameRate = this._maxFrameRate;
        }
        if (this._maxHeight) {
            hasAnyValues = true;
            internalValueResult.maxHeight = this._maxHeight;
        }
        if (this._maxWidth) {
            hasAnyValues = true;
            internalValueResult.maxWidth = this._maxWidth;
        }
        if (this._paddingPolicy) {
            hasAnyValues = true;
            internalValueResult.paddingPolicy = this._paddingPolicy;
        }
        if (this._resolution) {
            hasAnyValues = true;
            internalValueResult.resolution = this._resolution;
        }
        if (this._sizingPolicy) {
            hasAnyValues = true;
            internalValueResult.sizingPolicy = this._sizingPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._aspectRatio = undefined;
            this._bitRate = undefined;
            this._codec = undefined;
            this._displayAspectRatio = undefined;
            this._fixedGop = undefined;
            this._frameRate = undefined;
            this._keyframesMaxDist = undefined;
            this._maxFrameRate = undefined;
            this._maxHeight = undefined;
            this._maxWidth = undefined;
            this._paddingPolicy = undefined;
            this._resolution = undefined;
            this._sizingPolicy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._aspectRatio = value.aspectRatio;
            this._bitRate = value.bitRate;
            this._codec = value.codec;
            this._displayAspectRatio = value.displayAspectRatio;
            this._fixedGop = value.fixedGop;
            this._frameRate = value.frameRate;
            this._keyframesMaxDist = value.keyframesMaxDist;
            this._maxFrameRate = value.maxFrameRate;
            this._maxHeight = value.maxHeight;
            this._maxWidth = value.maxWidth;
            this._paddingPolicy = value.paddingPolicy;
            this._resolution = value.resolution;
            this._sizingPolicy = value.sizingPolicy;
        }
    }
    /**
     * @stability stable
     */
    get aspectRatio() {
        return this.getStringAttribute('aspect_ratio');
    }
    /**
     * @stability stable
     */
    set aspectRatio(value) {
        this._aspectRatio = value;
    }
    /**
     * @stability stable
     */
    resetAspectRatio() {
        this._aspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get aspectRatioInput() {
        return this._aspectRatio;
    }
    /**
     * @stability stable
     */
    get bitRate() {
        return this.getStringAttribute('bit_rate');
    }
    /**
     * @stability stable
     */
    set bitRate(value) {
        this._bitRate = value;
    }
    /**
     * @stability stable
     */
    resetBitRate() {
        this._bitRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bitRateInput() {
        return this._bitRate;
    }
    /**
     * @stability stable
     */
    get codec() {
        return this.getStringAttribute('codec');
    }
    /**
     * @stability stable
     */
    set codec(value) {
        this._codec = value;
    }
    /**
     * @stability stable
     */
    resetCodec() {
        this._codec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codecInput() {
        return this._codec;
    }
    /**
     * @stability stable
     */
    get displayAspectRatio() {
        return this.getStringAttribute('display_aspect_ratio');
    }
    /**
     * @stability stable
     */
    set displayAspectRatio(value) {
        this._displayAspectRatio = value;
    }
    /**
     * @stability stable
     */
    resetDisplayAspectRatio() {
        this._displayAspectRatio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get displayAspectRatioInput() {
        return this._displayAspectRatio;
    }
    /**
     * @stability stable
     */
    get fixedGop() {
        return this.getStringAttribute('fixed_gop');
    }
    /**
     * @stability stable
     */
    set fixedGop(value) {
        this._fixedGop = value;
    }
    /**
     * @stability stable
     */
    resetFixedGop() {
        this._fixedGop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fixedGopInput() {
        return this._fixedGop;
    }
    /**
     * @stability stable
     */
    get frameRate() {
        return this.getStringAttribute('frame_rate');
    }
    /**
     * @stability stable
     */
    set frameRate(value) {
        this._frameRate = value;
    }
    /**
     * @stability stable
     */
    resetFrameRate() {
        this._frameRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get frameRateInput() {
        return this._frameRate;
    }
    /**
     * @stability stable
     */
    get keyframesMaxDist() {
        return this.getStringAttribute('keyframes_max_dist');
    }
    /**
     * @stability stable
     */
    set keyframesMaxDist(value) {
        this._keyframesMaxDist = value;
    }
    /**
     * @stability stable
     */
    resetKeyframesMaxDist() {
        this._keyframesMaxDist = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyframesMaxDistInput() {
        return this._keyframesMaxDist;
    }
    /**
     * @stability stable
     */
    get maxFrameRate() {
        return this.getStringAttribute('max_frame_rate');
    }
    /**
     * @stability stable
     */
    set maxFrameRate(value) {
        this._maxFrameRate = value;
    }
    /**
     * @stability stable
     */
    resetMaxFrameRate() {
        this._maxFrameRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxFrameRateInput() {
        return this._maxFrameRate;
    }
    /**
     * @stability stable
     */
    get maxHeight() {
        return this.getStringAttribute('max_height');
    }
    /**
     * @stability stable
     */
    set maxHeight(value) {
        this._maxHeight = value;
    }
    /**
     * @stability stable
     */
    resetMaxHeight() {
        this._maxHeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxHeightInput() {
        return this._maxHeight;
    }
    /**
     * @stability stable
     */
    get maxWidth() {
        return this.getStringAttribute('max_width');
    }
    /**
     * @stability stable
     */
    set maxWidth(value) {
        this._maxWidth = value;
    }
    /**
     * @stability stable
     */
    resetMaxWidth() {
        this._maxWidth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxWidthInput() {
        return this._maxWidth;
    }
    /**
     * @stability stable
     */
    get paddingPolicy() {
        return this.getStringAttribute('padding_policy');
    }
    /**
     * @stability stable
     */
    set paddingPolicy(value) {
        this._paddingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetPaddingPolicy() {
        this._paddingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get paddingPolicyInput() {
        return this._paddingPolicy;
    }
    /**
     * @stability stable
     */
    get resolution() {
        return this.getStringAttribute('resolution');
    }
    /**
     * @stability stable
     */
    set resolution(value) {
        this._resolution = value;
    }
    /**
     * @stability stable
     */
    resetResolution() {
        this._resolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resolutionInput() {
        return this._resolution;
    }
    /**
     * @stability stable
     */
    get sizingPolicy() {
        return this.getStringAttribute('sizing_policy');
    }
    /**
     * @stability stable
     */
    set sizingPolicy(value) {
        this._sizingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetSizingPolicy() {
        this._sizingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sizingPolicyInput() {
        return this._sizingPolicy;
    }
}
exports.ElastictranscoderPresetVideoOutputReference = ElastictranscoderPresetVideoOutputReference;
_d = JSII_RTTI_SYMBOL_1;
ElastictranscoderPresetVideoOutputReference[_d] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPresetVideoOutputReference", version: "3.0.1" };
function elastictranscoderPresetVideoWatermarksToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        horizontal_align: cdktf.stringToTerraform(struct.horizontalAlign),
        horizontal_offset: cdktf.stringToTerraform(struct.horizontalOffset),
        id: cdktf.stringToTerraform(struct.id),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        opacity: cdktf.stringToTerraform(struct.opacity),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy),
        target: cdktf.stringToTerraform(struct.target),
        vertical_align: cdktf.stringToTerraform(struct.verticalAlign),
        vertical_offset: cdktf.stringToTerraform(struct.verticalOffset),
    };
}
exports.elastictranscoderPresetVideoWatermarksToTerraform = elastictranscoderPresetVideoWatermarksToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset}.
 *
 * @stability stable
 */
class ElastictranscoderPreset extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elastictranscoder_preset',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // audio - computed: false, optional: true, required: false
        this._audio = new ElastictranscoderPresetAudioOutputReference(this, "audio", true);
        // audio_codec_options - computed: false, optional: true, required: false
        this._audioCodecOptions = new ElastictranscoderPresetAudioCodecOptionsOutputReference(this, "audio_codec_options", true);
        // thumbnails - computed: false, optional: true, required: false
        this._thumbnails = new ElastictranscoderPresetThumbnailsOutputReference(this, "thumbnails", true);
        // video - computed: false, optional: true, required: false
        this._video = new ElastictranscoderPresetVideoOutputReference(this, "video", true);
        this._container = config.container;
        this._description = config.description;
        this._name = config.name;
        this._type = config.type;
        this._videoCodecOptions = config.videoCodecOptions;
        this._audio.internalValue = config.audio;
        this._audioCodecOptions.internalValue = config.audioCodecOptions;
        this._thumbnails.internalValue = config.thumbnails;
        this._video.internalValue = config.video;
        this._videoWatermarks = config.videoWatermarks;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    get container() {
        return this.getStringAttribute('container');
    }
    /**
     * @stability stable
     */
    set container(value) {
        this._container = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get containerInput() {
        return this._container;
    }
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    /**
     * @stability stable
     */
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    /**
     * @stability stable
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @stability stable
     */
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
    }
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
    /**
     * @stability stable
     */
    set type(value) {
        this._type = value;
    }
    /**
     * @stability stable
     */
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeInput() {
        return this._type;
    }
    /**
     * @stability stable
     */
    get videoCodecOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('video_codec_options');
    }
    /**
     * @stability stable
     */
    set videoCodecOptions(value) {
        this._videoCodecOptions = value;
    }
    /**
     * @stability stable
     */
    resetVideoCodecOptions() {
        this._videoCodecOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get videoCodecOptionsInput() {
        return this._videoCodecOptions;
    }
    /**
     * @stability stable
     */
    get audio() {
        return this._audio;
    }
    /**
     * @stability stable
     */
    putAudio(value) {
        this._audio.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAudio() {
        this._audio.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get audioInput() {
        return this._audio.internalValue;
    }
    /**
     * @stability stable
     */
    get audioCodecOptions() {
        return this._audioCodecOptions;
    }
    /**
     * @stability stable
     */
    putAudioCodecOptions(value) {
        this._audioCodecOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAudioCodecOptions() {
        this._audioCodecOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get audioCodecOptionsInput() {
        return this._audioCodecOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get thumbnails() {
        return this._thumbnails;
    }
    /**
     * @stability stable
     */
    putThumbnails(value) {
        this._thumbnails.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetThumbnails() {
        this._thumbnails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get thumbnailsInput() {
        return this._thumbnails.internalValue;
    }
    /**
     * @stability stable
     */
    get video() {
        return this._video;
    }
    /**
     * @stability stable
     */
    putVideo(value) {
        this._video.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetVideo() {
        this._video.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get videoInput() {
        return this._video.internalValue;
    }
    /**
     * @stability stable
     */
    get videoWatermarks() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('video_watermarks');
    }
    /**
     * @stability stable
     */
    set videoWatermarks(value) {
        this._videoWatermarks = value;
    }
    /**
     * @stability stable
     */
    resetVideoWatermarks() {
        this._videoWatermarks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get videoWatermarksInput() {
        return this._videoWatermarks;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            container: cdktf.stringToTerraform(this._container),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            type: cdktf.stringToTerraform(this._type),
            video_codec_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._videoCodecOptions),
            audio: elastictranscoderPresetAudioToTerraform(this._audio.internalValue),
            audio_codec_options: elastictranscoderPresetAudioCodecOptionsToTerraform(this._audioCodecOptions.internalValue),
            thumbnails: elastictranscoderPresetThumbnailsToTerraform(this._thumbnails.internalValue),
            video: elastictranscoderPresetVideoToTerraform(this._video.internalValue),
            video_watermarks: cdktf.listMapper(elastictranscoderPresetVideoWatermarksToTerraform)(this._videoWatermarks),
        };
    }
}
exports.ElastictranscoderPreset = ElastictranscoderPreset;
_e = JSII_RTTI_SYMBOL_1;
ElastictranscoderPreset[_e] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPreset", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ElastictranscoderPreset.tfResourceType = "aws_elastictranscoder_preset";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpY3RyYW5zY29kZXItcHJlc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VsYXN0aWN0cmFuc2NvZGVyL2VsYXN0aWN0cmFuc2NvZGVyLXByZXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXNDL0IsU0FBZ0IsdUNBQXVDLENBQUMsTUFBbUY7SUFDekksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQVpELDBGQVlDOzs7O0FBRUQsTUFBYSwyQ0FBNEMsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlsRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJ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SUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztZQUMvRyxVQUFVLEVBQUUsNENBQTRDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDeEYsS0FBSyxFQUFFLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3pFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaURBQWlELENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDN0csQ0FBQztJQUNKLENBQUM7O0FBak9ILDBEQWtPQzs7O0FBaE9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csc0NBQWMsR0FBVyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRhaW5lcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aWRlb0NvZGVjT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdWRpbz86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXVkaW9Db2RlY09wdGlvbnM/OiBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRodW1ibmFpbHM/OiBFbGFzdGljdHJhbnNjb2RlclByZXNldFRodW1ibmFpbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlkZW8/OiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZpZGVvV2F0ZXJtYXJrcz86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9XYXRlcm1hcmtzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXVkaW9QYWNraW5nTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaXRSYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNoYW5uZWxzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvZGVjPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNhbXBsZVJhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb091dHB1dFJlZmVyZW5jZSB8IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdWRpb19wYWNraW5nX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXVkaW9QYWNraW5nTW9kZSksXG4gICAgYml0X3JhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYml0UmF0ZSksXG4gICAgY2hhbm5lbHM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2hhbm5lbHMpLFxuICAgIGNvZGVjOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvZGVjKSxcbiAgICBzYW1wbGVfcmF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYW1wbGVSYXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdWRpb1BhY2tpbmdNb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdWRpb1BhY2tpbmdNb2RlID0gdGhpcy5fYXVkaW9QYWNraW5nTW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2JpdFJhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJpdFJhdGUgPSB0aGlzLl9iaXRSYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2hhbm5lbHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNoYW5uZWxzID0gdGhpcy5fY2hhbm5lbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb2RlYykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29kZWMgPSB0aGlzLl9jb2RlYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhbXBsZVJhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNhbXBsZVJhdGUgPSB0aGlzLl9zYW1wbGVSYXRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpbyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F1ZGlvUGFja2luZ01vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9iaXRSYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2hhbm5lbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb2RlYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NhbXBsZVJhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1ZGlvUGFja2luZ01vZGUgPSB2YWx1ZS5hdWRpb1BhY2tpbmdNb2RlO1xuICAgICAgdGhpcy5fYml0UmF0ZSA9IHZhbHVlLmJpdFJhdGU7XG4gICAgICB0aGlzLl9jaGFubmVscyA9IHZhbHVlLmNoYW5uZWxzO1xuICAgICAgdGhpcy5fY29kZWMgPSB2YWx1ZS5jb2RlYztcbiAgICAgIHRoaXMuX3NhbXBsZVJhdGUgPSB2YWx1ZS5zYW1wbGVSYXRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF1ZGlvX3BhY2tpbmdfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdWRpb1BhY2tpbmdNb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdWRpb1BhY2tpbmdNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXVkaW9fcGFja2luZ19tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdWRpb1BhY2tpbmdNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdWRpb1BhY2tpbmdNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXVkaW9QYWNraW5nTW9kZSgpIHtcbiAgICB0aGlzLl9hdWRpb1BhY2tpbmdNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdWRpb1BhY2tpbmdNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvUGFja2luZ01vZGU7XG4gIH1cblxuICAvLyBiaXRfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iaXRSYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBiaXRSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYml0X3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJpdFJhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JpdFJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCaXRSYXRlKCkge1xuICAgIHRoaXMuX2JpdFJhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJpdFJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0UmF0ZTtcbiAgfVxuXG4gIC8vIGNoYW5uZWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NoYW5uZWxzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjaGFubmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NoYW5uZWxzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjaGFubmVscyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2hhbm5lbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGFubmVscygpIHtcbiAgICB0aGlzLl9jaGFubmVscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2hhbm5lbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbm5lbHM7XG4gIH1cblxuICAvLyBjb2RlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2RlYz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29kZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29kZWModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvZGVjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29kZWMoKSB7XG4gICAgdGhpcy5fY29kZWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvZGVjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVjO1xuICB9XG5cbiAgLy8gc2FtcGxlX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FtcGxlUmF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NhbXBsZV9yYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYW1wbGVSYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYW1wbGVSYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2FtcGxlUmF0ZSgpIHtcbiAgICB0aGlzLl9zYW1wbGVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYW1wbGVSYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhbXBsZVJhdGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaXREZXB0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJpdE9yZGVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9maWxlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2lnbmVkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Db2RlY09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYml0X2RlcHRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpdERlcHRoKSxcbiAgICBiaXRfb3JkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYml0T3JkZXIpLFxuICAgIHByb2ZpbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvZmlsZSksXG4gICAgc2lnbmVkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpZ25lZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Db2RlY09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYml0RGVwdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJpdERlcHRoID0gdGhpcy5fYml0RGVwdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9iaXRPcmRlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYml0T3JkZXIgPSB0aGlzLl9iaXRPcmRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb2ZpbGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2ZpbGUgPSB0aGlzLl9wcm9maWxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2lnbmVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zaWduZWQgPSB0aGlzLl9zaWduZWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvQ29kZWNPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYml0RGVwdGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9iaXRPcmRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb2ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zaWduZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2JpdERlcHRoID0gdmFsdWUuYml0RGVwdGg7XG4gICAgICB0aGlzLl9iaXRPcmRlciA9IHZhbHVlLmJpdE9yZGVyO1xuICAgICAgdGhpcy5fcHJvZmlsZSA9IHZhbHVlLnByb2ZpbGU7XG4gICAgICB0aGlzLl9zaWduZWQgPSB2YWx1ZS5zaWduZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYml0X2RlcHRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JpdERlcHRoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBiaXREZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2JpdF9kZXB0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYml0RGVwdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JpdERlcHRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Qml0RGVwdGgoKSB7XG4gICAgdGhpcy5fYml0RGVwdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJpdERlcHRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdERlcHRoO1xuICB9XG5cbiAgLy8gYml0X29yZGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JpdE9yZGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBiaXRPcmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2JpdF9vcmRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYml0T3JkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JpdE9yZGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Qml0T3JkZXIoKSB7XG4gICAgdGhpcy5fYml0T3JkZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJpdE9yZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdE9yZGVyO1xuICB9XG5cbiAgLy8gcHJvZmlsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9maWxlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm9maWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvZmlsZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvZmlsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvZmlsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2ZpbGUoKSB7XG4gICAgdGhpcy5fcHJvZmlsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9maWxlO1xuICB9XG5cbiAgLy8gc2lnbmVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NpZ25lZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2lnbmVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2lnbmVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzaWduZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25lZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpZ25lZCgpIHtcbiAgICB0aGlzLl9zaWduZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpZ25lZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaWduZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFzcGVjdFJhdGlvPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9ybWF0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVydmFsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhIZWlnaHQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhXaWR0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYWRkaW5nUG9saWN5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvbHV0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzaXppbmdQb2xpY3k/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclByZXNldFRodW1ibmFpbHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbGFzdGljdHJhbnNjb2RlclByZXNldFRodW1ibmFpbHNPdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljdHJhbnNjb2RlclByZXNldFRodW1ibmFpbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhc3BlY3RfcmF0aW86IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXNwZWN0UmF0aW8pLFxuICAgIGZvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mb3JtYXQpLFxuICAgIGludGVydmFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsKSxcbiAgICBtYXhfaGVpZ2h0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heEhlaWdodCksXG4gICAgbWF4X3dpZHRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFdpZHRoKSxcbiAgICBwYWRkaW5nX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYWRkaW5nUG9saWN5KSxcbiAgICByZXNvbHV0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc29sdXRpb24pLFxuICAgIHNpemluZ19wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2l6aW5nUG9saWN5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlscyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXNwZWN0UmF0aW8pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFzcGVjdFJhdGlvID0gdGhpcy5fYXNwZWN0UmF0aW87XG4gICAgfVxuICAgIGlmICh0aGlzLl9mb3JtYXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZvcm1hdCA9IHRoaXMuX2Zvcm1hdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnRlcnZhbCA9IHRoaXMuX2ludGVydmFsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4SGVpZ2h0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhIZWlnaHQgPSB0aGlzLl9tYXhIZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhXaWR0aCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4V2lkdGggPSB0aGlzLl9tYXhXaWR0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhZGRpbmdQb2xpY3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhZGRpbmdQb2xpY3kgPSB0aGlzLl9wYWRkaW5nUG9saWN5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb2x1dGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb2x1dGlvbiA9IHRoaXMuX3Jlc29sdXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zaXppbmdQb2xpY3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNpemluZ1BvbGljeSA9IHRoaXMuX3NpemluZ1BvbGljeTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VGh1bWJuYWlscyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FzcGVjdFJhdGlvID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhIZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNvbHV0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2l6aW5nUG9saWN5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHZhbHVlLmFzcGVjdFJhdGlvO1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWUuZm9ybWF0O1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZS5pbnRlcnZhbDtcbiAgICAgIHRoaXMuX21heEhlaWdodCA9IHZhbHVlLm1heEhlaWdodDtcbiAgICAgIHRoaXMuX21heFdpZHRoID0gdmFsdWUubWF4V2lkdGg7XG4gICAgICB0aGlzLl9wYWRkaW5nUG9saWN5ID0gdmFsdWUucGFkZGluZ1BvbGljeTtcbiAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSB2YWx1ZS5yZXNvbHV0aW9uO1xuICAgICAgdGhpcy5fc2l6aW5nUG9saWN5ID0gdmFsdWUuc2l6aW5nUG9saWN5O1xuICAgIH1cbiAgfVxuXG4gIC8vIGFzcGVjdF9yYXRpbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hc3BlY3RSYXRpbz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXNwZWN0UmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhc3BlY3RfcmF0aW8nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFzcGVjdFJhdGlvKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFzcGVjdFJhdGlvKCkge1xuICAgIHRoaXMuX2FzcGVjdFJhdGlvID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhc3BlY3RSYXRpb0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hc3BlY3RSYXRpbztcbiAgfVxuXG4gIC8vIGZvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3JtYXQoKSB7XG4gICAgdGhpcy5fZm9ybWF0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JtYXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgLy8gaW50ZXJ2YWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW50ZXJ2YWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZXJ2YWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVydmFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEludGVydmFsKCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlcnZhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgfVxuXG4gIC8vIG1heF9oZWlnaHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4SGVpZ2h0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfaGVpZ2h0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhIZWlnaHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heEhlaWdodCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heEhlaWdodCgpIHtcbiAgICB0aGlzLl9tYXhIZWlnaHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heEhlaWdodElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhIZWlnaHQ7XG4gIH1cblxuICAvLyBtYXhfd2lkdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4V2lkdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X3dpZHRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhXaWR0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4V2lkdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhXaWR0aCgpIHtcbiAgICB0aGlzLl9tYXhXaWR0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4V2lkdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4V2lkdGg7XG4gIH1cblxuICAvLyBwYWRkaW5nX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYWRkaW5nUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYWRkaW5nUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFkZGluZ19wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhZGRpbmdQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYWRkaW5nUG9saWN5KCkge1xuICAgIHRoaXMuX3BhZGRpbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhZGRpbmdQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFkZGluZ1BvbGljeTtcbiAgfVxuXG4gIC8vIHJlc29sdXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzb2x1dGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb2x1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc29sdXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc29sdXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc29sdXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvbHV0aW9uKCkge1xuICAgIHRoaXMuX3Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc29sdXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x1dGlvbjtcbiAgfVxuXG4gIC8vIHNpemluZ19wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2l6aW5nUG9saWN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzaXppbmdQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaXppbmdfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzaXppbmdQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemluZ1BvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNpemluZ1BvbGljeSgpIHtcbiAgICB0aGlzLl9zaXppbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNpemluZ1BvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaXppbmdQb2xpY3k7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhc3BlY3RSYXRpbz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaXRSYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvZGVjPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc3BsYXlBc3BlY3RSYXRpbz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpeGVkR29wPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmcmFtZVJhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXlmcmFtZXNNYXhEaXN0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heEZyYW1lUmF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4SGVpZ2h0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4V2lkdGg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFkZGluZ1BvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb2x1dGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6aW5nUG9saWN5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9PdXRwdXRSZWZlcmVuY2UgfCBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXNwZWN0X3JhdGlvOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFzcGVjdFJhdGlvKSxcbiAgICBiaXRfcmF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iaXRSYXRlKSxcbiAgICBjb2RlYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlYyksXG4gICAgZGlzcGxheV9hc3BlY3RfcmF0aW86IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGlzcGxheUFzcGVjdFJhdGlvKSxcbiAgICBmaXhlZF9nb3A6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZml4ZWRHb3ApLFxuICAgIGZyYW1lX3JhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZnJhbWVSYXRlKSxcbiAgICBrZXlmcmFtZXNfbWF4X2Rpc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5ZnJhbWVzTWF4RGlzdCksXG4gICAgbWF4X2ZyYW1lX3JhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4RnJhbWVSYXRlKSxcbiAgICBtYXhfaGVpZ2h0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heEhlaWdodCksXG4gICAgbWF4X3dpZHRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFdpZHRoKSxcbiAgICBwYWRkaW5nX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYWRkaW5nUG9saWN5KSxcbiAgICByZXNvbHV0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc29sdXRpb24pLFxuICAgIHNpemluZ19wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2l6aW5nUG9saWN5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hc3BlY3RSYXRpbykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXNwZWN0UmF0aW8gPSB0aGlzLl9hc3BlY3RSYXRpbztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2JpdFJhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJpdFJhdGUgPSB0aGlzLl9iaXRSYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29kZWMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvZGVjID0gdGhpcy5fY29kZWM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaXNwbGF5QXNwZWN0UmF0aW8pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRpc3BsYXlBc3BlY3RSYXRpbyA9IHRoaXMuX2Rpc3BsYXlBc3BlY3RSYXRpbztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpeGVkR29wKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maXhlZEdvcCA9IHRoaXMuX2ZpeGVkR29wO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZnJhbWVSYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mcmFtZVJhdGUgPSB0aGlzLl9mcmFtZVJhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXlmcmFtZXNNYXhEaXN0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rZXlmcmFtZXNNYXhEaXN0ID0gdGhpcy5fa2V5ZnJhbWVzTWF4RGlzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heEZyYW1lUmF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4RnJhbWVSYXRlID0gdGhpcy5fbWF4RnJhbWVSYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4SGVpZ2h0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhIZWlnaHQgPSB0aGlzLl9tYXhIZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhXaWR0aCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4V2lkdGggPSB0aGlzLl9tYXhXaWR0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhZGRpbmdQb2xpY3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhZGRpbmdQb2xpY3kgPSB0aGlzLl9wYWRkaW5nUG9saWN5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzb2x1dGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb2x1dGlvbiA9IHRoaXMuX3Jlc29sdXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zaXppbmdQb2xpY3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNpemluZ1BvbGljeSA9IHRoaXMuX3NpemluZ1BvbGljeTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW8gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2JpdFJhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb2RlYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Rpc3BsYXlBc3BlY3RSYXRpbyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpeGVkR29wID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZnJhbWVSYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5ZnJhbWVzTWF4RGlzdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heEZyYW1lUmF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heEhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFkZGluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zaXppbmdQb2xpY3kgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FzcGVjdFJhdGlvID0gdmFsdWUuYXNwZWN0UmF0aW87XG4gICAgICB0aGlzLl9iaXRSYXRlID0gdmFsdWUuYml0UmF0ZTtcbiAgICAgIHRoaXMuX2NvZGVjID0gdmFsdWUuY29kZWM7XG4gICAgICB0aGlzLl9kaXNwbGF5QXNwZWN0UmF0aW8gPSB2YWx1ZS5kaXNwbGF5QXNwZWN0UmF0aW87XG4gICAgICB0aGlzLl9maXhlZEdvcCA9IHZhbHVlLmZpeGVkR29wO1xuICAgICAgdGhpcy5fZnJhbWVSYXRlID0gdmFsdWUuZnJhbWVSYXRlO1xuICAgICAgdGhpcy5fa2V5ZnJhbWVzTWF4RGlzdCA9IHZhbHVlLmtleWZyYW1lc01heERpc3Q7XG4gICAgICB0aGlzLl9tYXhGcmFtZVJhdGUgPSB2YWx1ZS5tYXhGcmFtZVJhdGU7XG4gICAgICB0aGlzLl9tYXhIZWlnaHQgPSB2YWx1ZS5tYXhIZWlnaHQ7XG4gICAgICB0aGlzLl9tYXhXaWR0aCA9IHZhbHVlLm1heFdpZHRoO1xuICAgICAgdGhpcy5fcGFkZGluZ1BvbGljeSA9IHZhbHVlLnBhZGRpbmdQb2xpY3k7XG4gICAgICB0aGlzLl9yZXNvbHV0aW9uID0gdmFsdWUucmVzb2x1dGlvbjtcbiAgICAgIHRoaXMuX3NpemluZ1BvbGljeSA9IHZhbHVlLnNpemluZ1BvbGljeTtcbiAgICB9XG4gIH1cblxuICAvLyBhc3BlY3RfcmF0aW8gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXNwZWN0UmF0aW8/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFzcGVjdFJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXNwZWN0X3JhdGlvJyk7XG4gIH1cbiAgcHVibGljIHNldCBhc3BlY3RSYXRpbyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXNwZWN0UmF0aW8gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBc3BlY3RSYXRpbygpIHtcbiAgICB0aGlzLl9hc3BlY3RSYXRpbyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXNwZWN0UmF0aW9JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNwZWN0UmF0aW87XG4gIH1cblxuICAvLyBiaXRfcmF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iaXRSYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBiaXRSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYml0X3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJpdFJhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JpdFJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCaXRSYXRlKCkge1xuICAgIHRoaXMuX2JpdFJhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJpdFJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0UmF0ZTtcbiAgfVxuXG4gIC8vIGNvZGVjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZGVjPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb2RlYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvZGVjJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb2RlYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29kZWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2RlYygpIHtcbiAgICB0aGlzLl9jb2RlYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29kZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZWM7XG4gIH1cblxuICAvLyBkaXNwbGF5X2FzcGVjdF9yYXRpbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaXNwbGF5QXNwZWN0UmF0aW8/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRpc3BsYXlBc3BlY3RSYXRpbygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rpc3BsYXlfYXNwZWN0X3JhdGlvJyk7XG4gIH1cbiAgcHVibGljIHNldCBkaXNwbGF5QXNwZWN0UmF0aW8odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3BsYXlBc3BlY3RSYXRpbyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpc3BsYXlBc3BlY3RSYXRpbygpIHtcbiAgICB0aGlzLl9kaXNwbGF5QXNwZWN0UmF0aW8gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpc3BsYXlBc3BlY3RSYXRpb0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5QXNwZWN0UmF0aW87XG4gIH1cblxuICAvLyBmaXhlZF9nb3AgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZml4ZWRHb3A/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpeGVkR29wKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZml4ZWRfZ29wJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaXhlZEdvcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZml4ZWRHb3AgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaXhlZEdvcCgpIHtcbiAgICB0aGlzLl9maXhlZEdvcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZml4ZWRHb3BJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZml4ZWRHb3A7XG4gIH1cblxuICAvLyBmcmFtZV9yYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZyYW1lUmF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZnJhbWVSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnJhbWVfcmF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJhbWVSYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mcmFtZVJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGcmFtZVJhdGUoKSB7XG4gICAgdGhpcy5fZnJhbWVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmcmFtZVJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhbWVSYXRlO1xuICB9XG5cbiAgLy8ga2V5ZnJhbWVzX21heF9kaXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleWZyYW1lc01heERpc3Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleWZyYW1lc01heERpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlmcmFtZXNfbWF4X2Rpc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleWZyYW1lc01heERpc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tleWZyYW1lc01heERpc3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLZXlmcmFtZXNNYXhEaXN0KCkge1xuICAgIHRoaXMuX2tleWZyYW1lc01heERpc3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleWZyYW1lc01heERpc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5ZnJhbWVzTWF4RGlzdDtcbiAgfVxuXG4gIC8vIG1heF9mcmFtZV9yYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4RnJhbWVSYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhGcmFtZVJhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfZnJhbWVfcmF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4RnJhbWVSYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhGcmFtZVJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhGcmFtZVJhdGUoKSB7XG4gICAgdGhpcy5fbWF4RnJhbWVSYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhGcmFtZVJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RnJhbWVSYXRlO1xuICB9XG5cbiAgLy8gbWF4X2hlaWdodCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhIZWlnaHQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF9oZWlnaHQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heEhlaWdodCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4SGVpZ2h0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4SGVpZ2h0KCkge1xuICAgIHRoaXMuX21heEhlaWdodCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4SGVpZ2h0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heEhlaWdodDtcbiAgfVxuXG4gIC8vIG1heF93aWR0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhXaWR0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfd2lkdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFdpZHRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhXaWR0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFdpZHRoKCkge1xuICAgIHRoaXMuX21heFdpZHRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhXaWR0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhXaWR0aDtcbiAgfVxuXG4gIC8vIHBhZGRpbmdfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhZGRpbmdQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhZGRpbmdQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYWRkaW5nX3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFkZGluZ1BvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFkZGluZ1BvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhZGRpbmdQb2xpY3koKSB7XG4gICAgdGhpcy5fcGFkZGluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFkZGluZ1BvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYWRkaW5nUG9saWN5O1xuICB9XG5cbiAgLy8gcmVzb2x1dGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNvbHV0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvbHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb2x1dGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb2x1dGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb2x1dGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc29sdXRpb24oKSB7XG4gICAgdGhpcy5fcmVzb2x1dGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb2x1dGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHV0aW9uO1xuICB9XG5cbiAgLy8gc2l6aW5nX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zaXppbmdQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNpemluZ1BvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NpemluZ19wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNpemluZ1BvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6aW5nUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2l6aW5nUG9saWN5KCkge1xuICAgIHRoaXMuX3NpemluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2l6aW5nUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemluZ1BvbGljeTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvV2F0ZXJtYXJrcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvcml6b250YWxBbGlnbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3Jpem9udGFsT2Zmc2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhIZWlnaHQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhXaWR0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3BhY2l0eT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6aW5nUG9saWN5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnRpY2FsQWxpZ24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2ZXJ0aWNhbE9mZnNldD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9XYXRlcm1hcmtzVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBob3Jpem9udGFsX2FsaWduOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvcml6b250YWxBbGlnbiksXG4gICAgaG9yaXpvbnRhbF9vZmZzZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9yaXpvbnRhbE9mZnNldCksXG4gICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWQpLFxuICAgIG1heF9oZWlnaHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4SGVpZ2h0KSxcbiAgICBtYXhfd2lkdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4V2lkdGgpLFxuICAgIG9wYWNpdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3BhY2l0eSksXG4gICAgc2l6aW5nX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zaXppbmdQb2xpY3kpLFxuICAgIHRhcmdldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXQpLFxuICAgIHZlcnRpY2FsX2FsaWduOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnRpY2FsQWxpZ24pLFxuICAgIHZlcnRpY2FsX29mZnNldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJ0aWNhbE9mZnNldCksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2VsYXN0aWN0cmFuc2NvZGVyX3ByZXNldFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lbGFzdGljdHJhbnNjb2Rlcl9wcmVzZXQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lcjtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIHRoaXMuX3ZpZGVvQ29kZWNPcHRpb25zID0gY29uZmlnLnZpZGVvQ29kZWNPcHRpb25zO1xuICAgIHRoaXMuX2F1ZGlvLmludGVybmFsVmFsdWUgPSBjb25maWcuYXVkaW87XG4gICAgdGhpcy5fYXVkaW9Db2RlY09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hdWRpb0NvZGVjT3B0aW9ucztcbiAgICB0aGlzLl90aHVtYm5haWxzLmludGVybmFsVmFsdWUgPSBjb25maWcudGh1bWJuYWlscztcbiAgICB0aGlzLl92aWRlby5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnZpZGVvO1xuICAgIHRoaXMuX3ZpZGVvV2F0ZXJtYXJrcyA9IGNvbmZpZy52aWRlb1dhdGVybWFya3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29udGFpbmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbnRhaW5lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGFpbmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250YWluZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250YWluZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFR5cGUoKSB7XG4gICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gdmlkZW9fY29kZWNfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92aWRlb0NvZGVjT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdmlkZW9Db2RlY09wdGlvbnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZpZGVvX2NvZGVjX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB2aWRlb0NvZGVjT3B0aW9ucyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdmlkZW9Db2RlY09wdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWaWRlb0NvZGVjT3B0aW9ucygpIHtcbiAgICB0aGlzLl92aWRlb0NvZGVjT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmlkZW9Db2RlY09wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlkZW9Db2RlY09wdGlvbnM7XG4gIH1cblxuICAvLyBhdWRpbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdWRpbyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclByZXNldEF1ZGlvT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF1ZGlvXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1ZGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpbztcbiAgfVxuICBwdWJsaWMgcHV0QXVkaW8odmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW8pIHtcbiAgICB0aGlzLl9hdWRpby5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXVkaW8oKSB7XG4gICAgdGhpcy5fYXVkaW8uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXVkaW9JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW8uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGF1ZGlvX2NvZGVjX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXVkaW9Db2RlY09wdGlvbnMgPSBuZXcgRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhdWRpb19jb2RlY19vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1ZGlvQ29kZWNPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0NvZGVjT3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0QXVkaW9Db2RlY09wdGlvbnModmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0QXVkaW9Db2RlY09wdGlvbnMpIHtcbiAgICB0aGlzLl9hdWRpb0NvZGVjT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXVkaW9Db2RlY09wdGlvbnMoKSB7XG4gICAgdGhpcy5fYXVkaW9Db2RlY09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXVkaW9Db2RlY09wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9Db2RlY09wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRodW1ibmFpbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGh1bWJuYWlscyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclByZXNldFRodW1ibmFpbHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGh1bWJuYWlsc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aHVtYm5haWxzKCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxzO1xuICB9XG4gIHB1YmxpYyBwdXRUaHVtYm5haWxzKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclByZXNldFRodW1ibmFpbHMpIHtcbiAgICB0aGlzLl90aHVtYm5haWxzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHVtYm5haWxzKCkge1xuICAgIHRoaXMuX3RodW1ibmFpbHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGh1bWJuYWlsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB2aWRlbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92aWRlbyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInZpZGVvXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHZpZGVvKCkge1xuICAgIHJldHVybiB0aGlzLl92aWRlbztcbiAgfVxuICBwdWJsaWMgcHV0VmlkZW8odmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW8pIHtcbiAgICB0aGlzLl92aWRlby5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmlkZW8oKSB7XG4gICAgdGhpcy5fdmlkZW8uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmlkZW9JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlkZW8uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZpZGVvX3dhdGVybWFya3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmlkZW9XYXRlcm1hcmtzPzogRWxhc3RpY3RyYW5zY29kZXJQcmVzZXRWaWRlb1dhdGVybWFya3NbXTsgXG4gIHB1YmxpYyBnZXQgdmlkZW9XYXRlcm1hcmtzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2aWRlb193YXRlcm1hcmtzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdmlkZW9XYXRlcm1hcmtzKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvV2F0ZXJtYXJrc1tdKSB7XG4gICAgdGhpcy5fdmlkZW9XYXRlcm1hcmtzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmlkZW9XYXRlcm1hcmtzKCkge1xuICAgIHRoaXMuX3ZpZGVvV2F0ZXJtYXJrcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmlkZW9XYXRlcm1hcmtzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZGVvV2F0ZXJtYXJrcztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb250YWluZXIpLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdHlwZSksXG4gICAgICB2aWRlb19jb2RlY19vcHRpb25zOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl92aWRlb0NvZGVjT3B0aW9ucyksXG4gICAgICBhdWRpbzogZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb1RvVGVycmFmb3JtKHRoaXMuX2F1ZGlvLmludGVybmFsVmFsdWUpLFxuICAgICAgYXVkaW9fY29kZWNfb3B0aW9uczogZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRBdWRpb0NvZGVjT3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX2F1ZGlvQ29kZWNPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgdGh1bWJuYWlsczogZWxhc3RpY3RyYW5zY29kZXJQcmVzZXRUaHVtYm5haWxzVG9UZXJyYWZvcm0odGhpcy5fdGh1bWJuYWlscy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHZpZGVvOiBlbGFzdGljdHJhbnNjb2RlclByZXNldFZpZGVvVG9UZXJyYWZvcm0odGhpcy5fdmlkZW8uaW50ZXJuYWxWYWx1ZSksXG4gICAgICB2aWRlb193YXRlcm1hcmtzOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWN0cmFuc2NvZGVyUHJlc2V0VmlkZW9XYXRlcm1hcmtzVG9UZXJyYWZvcm0pKHRoaXMuX3ZpZGVvV2F0ZXJtYXJrcyksXG4gICAgfTtcbiAgfVxufVxuIl19